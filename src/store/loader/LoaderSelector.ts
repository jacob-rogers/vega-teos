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
