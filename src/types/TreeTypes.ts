import { DomainScenarioEnum } from '@app/generated/graphql';

export type Attributes = {
  object: GeoObject;
  scenario: GeoScenario;
};

export type GeoScenario = {
  name: string;
  vid: string;
};

export type GeoObject = {
  name: string;
  code: DomainScenarioEnum;
  parentVid: string;
};

export type TreeFilter = {
  key: string;
  label: string;
};

export interface TreeItemData {
  id: string;
  name: string;
  parentId?: string;
  nodeList: TreeItemData[];
}
