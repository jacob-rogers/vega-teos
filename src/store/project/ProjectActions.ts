import actionCreatorFactory from 'typescript-fsa';

const factory = actionCreatorFactory('project');

export const ProjectActions = {
  updateProjectName: factory<string>('UPDATE_PROJECT_NAME'),
};
