import React from 'react';

import RegisterPanelComponent from '../components/RegisterPanel/RegisterPanel';

export default {
  title: 'Components',
  component: RegisterPanelComponent
};

const Template = (args) => <RegisterPanelComponent {...args} />;

export const RegisterToProjectPanel = Template.bind({});
RegisterToProjectPanel.args = {};