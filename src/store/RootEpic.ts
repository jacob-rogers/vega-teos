import { combineEpics } from 'redux-observable';

import { TableEpics } from './table/TableEpics';
import { TreeEpics } from './tree/TreeEpics';

export default combineEpics(...TreeEpics, ...TableEpics);
