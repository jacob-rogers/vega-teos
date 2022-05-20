import { DomainScenarioEnum } from '@app/generated/graphql';
import { GeoScenario, TreeItemData } from '@app/types/TreeTypes';
import { TreeItem } from '@gpn-prototypes/vega-ui';
import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

/**
 * TODO: описать
 */
export const selectCurrentVariant = createSelector(
  (state: RootState) => state.tree.currentTreeItem,
  (state: RootState) => state.tree.projectTree,
  (
    currentTreeItem: TreeItem<TreeItemData> | undefined,
    projectTree: TreeItem<TreeItemData>[],
  ): GeoScenario | null => {
    const parentId = currentTreeItem?.parentId;

    const parentTreeItem: TreeItem<TreeItemData> | undefined = projectTree.find(
      (innerTreeItem: TreeItem<TreeItemData>) => {
        return innerTreeItem.id === parentId;
      },
    );

    if (!parentTreeItem || !currentTreeItem) {
      return null;
    }

    return Object.values(DomainScenarioEnum).includes(
      parentTreeItem.id as DomainScenarioEnum,
    )
      ? {
          name: currentTreeItem.name,
          vid: currentTreeItem.id,
        }
      : null;
  },
);

export const selectCurrentTreeItem = createSelector(
  (state: RootState) => state.tree.currentTreeItem,
  (currentTreeItem: TreeItem<TreeItemData> | undefined) => currentTreeItem,
);

export const selectCurrentTreeItemName = createSelector(
  (state: RootState) => state.tree.currentTreeItem?.name,
  (name: string | undefined) => name,
);

export const selectCurrentTreeItemId = createSelector(
  (state: RootState) => state.tree.currentTreeItem?.id,
  (id: string | undefined) => id,
);

export const selectTreeData = createSelector(
  (state: RootState) => state.tree.projectTree,
  (projectTree: TreeItem<TreeItemData>[]) => projectTree,
);
