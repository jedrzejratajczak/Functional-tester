import React from 'react';

import BugTable, { types } from './BugTable';

export default {
  title: 'Bug Table',
  component: BugTable
};

const Template = (args) => <BugTable {...args} />;

function createData(code, name, state, functionality, type, impact, priority, execs) {
  return { code, name, state, functionality, type, impact, priority, execs };
}

const rows = [
  createData('E-12323', 'Not responding', 'New', 'Login', 'Functional', 'High', 'Low', '1/1/1'),
  createData(
    'E-45432',
    'Table not visible',
    'New',
    'Register',
    'Functional',
    'Low',
    'Medium',
    '1/1/1'
  ),
  createData(
    'E-95783',
    'Internet down',
    'In testing',
    'Add product',
    'Logical',
    'Medium',
    'Low',
    '1/1/1'
  ),
  createData(
    'E-769478',
    'Christmas early this year',
    'Fixed',
    'Login',
    'Logical',
    'Low',
    'Medium',
    '1/1/1'
  ),
  createData(
    'E-654865',
    'Big bang',
    'For retest',
    'Login',
    'Wrong datatype',
    'Medium',
    'High',
    '1/1/1'
  ),
  createData(
    'E-234504',
    'Rain is raining',
    'Resolved',
    'Login',
    'Wrong datatype',
    'High',
    'High',
    '1/1/1'
  ),
  createData(
    'E-090123',
    'Goblins attack',
    'Rejected',
    'Login',
    'Code duplication',
    'Low',
    'Low',
    '1/1/1'
  ),
  createData(
    'E-325980',
    'Lorem ipsum dolor',
    'Resolved',
    'Login',
    'Logical',
    'Medium',
    'Medium',
    '1/1/1'
  ),
  createData(
    'E-123423',
    'Lorem ipsum dolor',
    'Resolved',
    'Login',
    'Logical',
    'High',
    'High',
    '1/1/1'
  ),
  createData(
    'E-112223',
    'Lorem ipsum dolor',
    'Fixed',
    'Login',
    'Code duplication',
    'Medium',
    'Low',
    '1/1/1'
  ),
  createData(
    'E-123432',
    'Lorem ipsum dolor',
    'Fixed',
    'Login',
    'Code duplication',
    'Low',
    'Low',
    '1/1/1'
  ),
  createData(
    'E-123290',
    'Lorem ipsum dolor',
    'New',
    'Login',
    'Wrong datatype',
    'Low',
    'Medium',
    '1/1/1'
  ),
  createData(
    'E-123003',
    'Lorem ipsum dolor',
    'In testing',
    'Login',
    'Security',
    'High',
    'Low',
    '1/1/1'
  )
];

export const ToReview = Template.bind({});
ToReview.args = {
  type: types.toReview,
  rows
};

export const ToFix = Template.bind({});
ToFix.args = {
  type: types.toFix,
  rows
};

export const MyBugs = Template.bind({});
MyBugs.args = {
  type: types.myBugs,
  rows
};
