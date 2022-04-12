import { combineEpics } from 'redux-observable';

import { ExampleEpics } from './example/ExampleEpic';

export default combineEpics(...ExampleEpics);
