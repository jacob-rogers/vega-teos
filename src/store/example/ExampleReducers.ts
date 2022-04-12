import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { ExampleAction, ExampleStore } from './ExampleAction';

export const exampleStoreInitialState: ExampleStore = {
  example: false,
};

export const ExampleReducers = reducerWithInitialState<ExampleStore>(
  exampleStoreInitialState,
).case(ExampleAction.setExample, (state, example: boolean) => {
  return {
    ...state,
    example,
  };
});
