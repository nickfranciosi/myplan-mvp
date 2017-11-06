import React from 'react';
import { mount } from 'react-mounter';

// Layouts
import DefaultLayout from '../imports/ui/layouts/defaultLayout';

// Pages
import { Home } from '../imports/ui/pages/home';
import { SchoolDetail } from '../imports/ui/pages/schoolDetail';
import { PlanDetail } from '../imports/ui/pages/planDetail';
import { PlanCreate } from '../imports/ui/pages/planCreate';


FlowRouter.route('/', {
  action() {
    mount(DefaultLayout, {
      content: (<Home />),
    })
  }
});

FlowRouter.route('/school/:schoolName', {
  action(params) {
    mount(DefaultLayout, {
      content: (<SchoolDetail school={params.schoolName} />),
    })
  }
});

FlowRouter.route('/plan/create', {
  action() {
    mount(DefaultLayout, {
      content: (<PlanCreate />),
    })
  }
});

FlowRouter.route('/plan/:planName', {
  action(params) {
    mount(DefaultLayout, {
      content: (<PlanDetail plan={params.planName} />),
    })
  }
});