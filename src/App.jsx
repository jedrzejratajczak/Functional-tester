import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import { RequireAuth } from './providers';
import { Logout } from './containers';
import {
  ResetPasswordPanel,
  ForgotPasswordPanel,
  RegisterToProjectPanel,
  InviteUserToProjectPanel,
  WelcomeUserToProjectPanel
} from './components';
import {
  LoginPage,
  NotFound,
  AssignedBugsPage,
  ActiveBugsPage,
  AllBugsPage,
  TestRunPage,
  RetestBugsPage,
  DashboardPage,
  TestPlanPage,
  TestPlanListPage,
  RegisterPage,
  DeleteUserPage
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="logout" element={<Logout />} />
        <Route path="reset_password" element={<ForgotPasswordPanel />} />
        <Route path="api/auth/:userId/:token" element={<ResetPasswordPanel />} />
        <Route path="invite_user" element={<InviteUserToProjectPanel />} />
        <Route path="welcome/:username" element={<WelcomeUserToProjectPanel />} />
        <Route
          path="api/account/:role/:productIdEncoded/:emailEncoded"
          element={<RegisterToProjectPanel />}
        />
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="test_plans">
            <Route index element={<TestPlanListPage />} />
            <Route path=":id/:name" element={<TestPlanPage />} />
          </Route>
          <Route path="bugs">
            <Route index element={<AllBugsPage />} />
            <Route path="assigned" element={<AssignedBugsPage />} />
            <Route path="active" element={<ActiveBugsPage />} />
            <Route path="retest" element={<RetestBugsPage />} />
          </Route>
          <Route path="test_execution/:origin/:id" element={<TestRunPage />} />
          <Route path="delete_user" element={<DeleteUserPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
