import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ProjectInner } from '@app/generated/graphql';
import { ProjectServiceProps } from '@app/interfaces/ProjectInterface';
import { TABLE_DATA_MOCK } from '@app/store/table/__mocks__/tableData';
import { CurrentProject, Identity, Project } from '@app/types';
import { TableDataPayload } from '@app/types/TableTypes';
import { GridCollection } from '@gpn-prototypes/vega-ui';

type ConcurrentProject = ProjectInner & Project;

export class TableService {
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

  init({ client, project, identity }: ProjectServiceProps): TableService {
    this.clientMod = client;
    this.identityMod = identity;
    this.projectShellMod = project;

    return this;
  }

  async getTableData(params: TableDataPayload): Promise<GridCollection> {
    // TODO: убрать после привязки к бэку
    console.log({ ...params, vid: this.projectId });

    return new Promise((resolve) => {
      setTimeout(() => resolve(TABLE_DATA_MOCK), 3000);
    });
  }
}

const tableService = new TableService();

export default tableService;
