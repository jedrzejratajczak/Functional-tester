import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authSlice';
import testReducer from './reducers/test/testSlice';
import bugsReducer from './reducers/bugsSlice';
import testPlanReducer from './reducers/testPlan/testPlanSlice';
import testExecutionReducer from './reducers/testExecution/testExecutionSlice';
import raportsReducer from './reducers/raportsSlice';

const reducer = {
  auth: authReducer,
  test: testReducer,
  bugs: bugsReducer,
  testPlan: testPlanReducer,
  testExecution: testExecutionReducer,
  raports: raportsReducer
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
export * from './reducers/authSlice';
export * from './reducers/test/testSlice';
export * from './reducers/bugsSlice';
export * from './reducers/testPlan/testPlanSlice';
export * from './reducers/testExecution/testExecutionSlice';
export * from './reducers/raportsSlice';
