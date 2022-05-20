import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ProjectInner, Query, TeosStructureL } from '@app/generated/graphql';
import { GET_PROJECT_TREE } from '@app/graphql/queries/TreeQueries';
import { getGraphqlUri } from '@app/helpers/ServiceHelper';
import { ProjectServiceProps } from '@app/interfaces/ProjectInterface';
import { CurrentProject, Identity, Project } from '@app/types';
import { getOr } from 'lodash/fp';

type ConcurrentProject = ProjectInner & Project;

export class TreeService {
  clientMod: ApolloClient<NormalizedCacheObject> | undefined;

  identityMod: Identity | undefined;

  projectShellMod: CurrentProject | undefined;

  projectMod: ConcurrentProject | undefined;

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

  init({ client, project, identity }: ProjectServiceProps): TreeService {
    this.clientMod = client;
    this.identityMod = identity;
    this.projectShellMod = project;

    return this;
  }

  async getProjectTree(): Promise<TeosStructureL> {
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
      { domainEntities: [], domainObjects: [], domainScenarios: [] },
      ['project', 'teosQueries', 'getProjectTree'],
      responseData,
    );
  }
}

const treeService = new TreeService();

export default treeService;
