import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('example');

export type ExampleStore = {
  example: boolean;
};

export const ExampleAction = {
  example: factory('EXAMPLE'),
  setExample: factory<boolean>('SET_EXAMPLE'),
};
