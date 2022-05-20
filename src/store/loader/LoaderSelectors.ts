import { createSelector } from 'reselect';

import { RootState } from '../StoreTypes';

export const selectTableLoading = createSelector(
  (state: RootState) => state.loader.loading.table,
  (isLoading) => isLoading,
);

export const selectTableLoaded = createSelector(
  (state: RootState) => state.loader.loaded.table,
  (isLoaded) => isLoaded,
);

export const selectTreeLoading = createSelector(
  (state: RootState) => state.loader.loading.tree,
  (isLoading) => isLoading,
);

export const selectTreeLoaded = createSelector(
  (state: RootState) => state.loader.loaded.tree,
  (isLoaded) => isLoaded,
);

export const selectUpdateVariantLoading = createSelector(
  (state: RootState) => state.loader.loading.updateVariant,
  (isLoading) => isLoading,
);

export const selectUpdateVariantLoaded = createSelector(
  (state: RootState) => state.loader.loaded.updateVariant,
  (isLoaded) => isLoaded,
);
