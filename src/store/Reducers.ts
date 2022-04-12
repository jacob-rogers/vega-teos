import { RootState } from '@app/store/StoreTypes';
import { combineReducers } from 'redux';

import { ExampleReducers } from './example/ExampleReducers';

export default combineReducers<RootState>({
  example: ExampleReducers,
});
