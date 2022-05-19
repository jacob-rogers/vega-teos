import {
  ApolloClient,
  FetchResult,
  NormalizedCacheObject,
} from '@apollo/client';
import { FetchPolicy } from '@apollo/client/core/watchQueryOptions';
import {
  ProjectInner,
  Query,
  ResultProjectStructure,
  ResultProjectTreeStructure,
} from '@app/generated/graphql';
import {
  DEFAULT_QUERY,
  GET_PROJECT_NAME,
  GET_PROJECT_TREE,
} from '@app/graphql/queries/Queries';
import { getGraphqlUri } from '@app/helpers/ServiceHelper';
import { ProjectServiceProps } from '@app/interfaces/ProjectInterface';
import { CurrentProject, Identity, Project } from '@app/types';
import { getOr } from 'lodash/fp';

type Data = FetchResult['data'];

type ConcurrentProject = ProjectInner & Project;

export class ProjectService {
  abortControllerMod: AbortController | undefined;

  clientMod: ApolloClient<NormalizedCacheObject> | undefined;

  fetchPolicyMod: FetchPolicy = 'network-only';

  identityMod: Identity | undefined;

  projectMod: ConcurrentProject | undefined;

  projectShellMod: CurrentProject | undefined;

  // diffErrorTypenameMod = 'UpdateProjectInnerDiff';

  get abortController(): AbortController {
    if (this.abortControllerMod === undefined)
      throw Error("Controller hasn't been initialized");

    return this.abortControllerMod;
  }

  get client() {
    return this.clientMod as ApolloClient<NormalizedCacheObject>;
  }

  get identity() {
    return this.identityMod as Identity;
  }

  get projectId(): string {
    return String(this.projectShellMod?.get().vid);
  }

  get version(): number {
    return Number(this.projectShellMod?.get().version);
  }

  get project(): ConcurrentProject {
    return this.projectMod as ConcurrentProject;
  }

  static isProject(data: Data): data is Partial<ProjectInner> {
    return data?.__typename === 'ProjectInner';
  }

  init({ client, project, identity }: ProjectServiceProps): ProjectService {
    this.clientMod = client;
    this.identityMod = identity;
    this.projectShellMod = project;

    return this;
  }

  async getProjectName(): Promise<string> {
    const { data: responseData } = await this.client
      .watchQuery({
        query: GET_PROJECT_NAME,
        variables: {
          vid: this.projectId,
        },
        fetchPolicy: 'no-cache',
      })
      .result();

    return responseData.project.name;
  }

  async getResourceBaseData(): Promise<ResultProjectStructure | null> {
    const { data: responseData } = await this.client
      .watchQuery<Query>({
        query: DEFAULT_QUERY,
        context: {
          uri: getGraphqlUri(this.projectId),
        },
        fetchPolicy: 'no-cache',
      })
      .result();

    return getOr(
      null,
      ['project', 'resourceBase', 'result', 'resultTable', 'template'],
      responseData,
    );
  }

  async getProjectTree(): Promise<ResultProjectTreeStructure | null> {
    const { data: responseData } = await this.client
      .watchQuery<Query>({
        query: GET_PROJECT_TREE,
        context: {
          uri: getGraphqlUri(this.projectId),
        },
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      })
      .result();

    return getOr(
      null,
      ['project', 'teosQueries', 'getProjectTree'],
      responseData,
    );
  }
}

const projectService = new ProjectService();

export default projectService;
