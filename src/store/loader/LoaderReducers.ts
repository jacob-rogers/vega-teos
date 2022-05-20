import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { LoaderAction, LoaderStore, LoadingType } from './LoaderActions';

export const loaderStoreInitialState: LoaderStore = Object.freeze({
  loaded: {
    table: false,
    tree: false,
    updateVariant: false,
  },
  loading: {
    table: true,
    tree: true,
    updateVariant: false,
  },
});

export const LoaderReducers = reducerWithInitialState<LoaderStore>(
  loaderStoreInitialState,
)
  .case(LoaderAction.setLoading, (state, type: LoadingType) => {
    const cloneState = { ...state };

    cloneState.loaded[type] = false;
    cloneState.loading[type] = true;

    return cloneState;
  })
  .case(LoaderAction.setLoaded, (state, type: LoadingType) => {
    const cloneState = { ...state };

    cloneState.loaded[type] = true;
    cloneState.loading[type] = false;

    return cloneState;
  })
  .case(LoaderAction.resetType, (state, type: LoadingType) => {
    const cloneState = { ...state };

    cloneState.loaded[type] = false;
    cloneState.loading[type] = false;

    return cloneState;
  })
  .case(LoaderAction.resetStore, () => {
    return {
      loaded: {
        table: false,
        tree: false,
        updateVariant: false,
      },
      loading: {
        table: false,
        tree: false,
        updateVariant: false,
      },
    };
  });
