import { RootState } from '../StoreTypes';

export const selectProjectName = (state: RootState) => state.project.name;
