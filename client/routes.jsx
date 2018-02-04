import React from 'react';
import { mount } from 'react-mounter';
import '../imports/startup/accounts-config.js';
// Layouts
import DefaultLayout from '../imports/ui/layouts/defaultLayout';

// Pages
import Home from '../imports/ui/pages/home';
import SchoolDetail from '../imports/ui/pages/schoolDetail';
import PlanDetail from '../imports/ui/pages/planDetail';
import PlanCreate from '../imports/ui/pages/planCreate';
import Donate from '../imports/ui/pages/donate';
import SignUp from '../imports/ui/pages/signUp';
import SignIn from '../imports/ui/pages/signIn';
import Contact from '../imports/ui/pages/contact';
import HowItWorks from '../imports/ui/pages/howItWorks';
import Admin from '../imports/ui/pages/admin';


FlowRouter.route('/', {
  action() {
    mount(DefaultLayout, {
      content: (<Home />),
    })
  }
});


FlowRouter.route('/signup', {
  action() {
    mount(DefaultLayout, {
      content: (<SignUp />),
    })
  }
});

FlowRouter.route('/signin', {
  action() {
    mount(DefaultLayout, {
      content: (<SignIn />),
    })
  }
});

FlowRouter.route('/contact', {
  action() {
    mount(DefaultLayout, {
      content: (<Contact />),
    })
  }
});

FlowRouter.route('/how-it-works', {
  action() {
    mount(DefaultLayout, {
      content: (<HowItWorks />),
    })
  }
});

FlowRouter.route('/school/:schoolId', {
  action(params) {
    mount(DefaultLayout, {
      content: (<SchoolDetail schoolId={params.schoolId} />),
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

FlowRouter.route('/plan/:planId', {
  action(params) {
    mount(DefaultLayout, {
      content: (<PlanDetail planId={params.planId} />),
    })
  }
});

FlowRouter.route('/plan/:planId/donate/', {
  action(params) {
    mount(DefaultLayout, {
      content: (<Donate planId={params.planId} />),
    })
  }
});


const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  triggersEnter: [
      (context, redirect) => {
          if (!Meteor.userId()) {
              redirect('/');
          }
      }
  ]
});

adminRoutes.route('/', {
  action (params) {
    mount(DefaultLayout, {
      content: (<Admin />),
    })
  }
});
