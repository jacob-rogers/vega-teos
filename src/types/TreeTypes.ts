export type Attributes = {
  object: GeoObject;
  scenario: GeoScenario;
};

export type GeoScenario = {
  title: string;
};

export type GeoObject = {
  title: string;
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
