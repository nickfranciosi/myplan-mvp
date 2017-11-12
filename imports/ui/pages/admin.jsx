import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'


const Admin = ({ currentUser = {}, plans = [] }) => (
  <div>
    <h2>Admin for {currentUser._id}</h2>
    <h3>Plans</h3>
    <ul>
      { plans && plans.map(plan => <li key={plan._id}>{plan.planName}</li>)}
    </ul>
  </div>
);

export default withTracker(props => {
  Meteor.subscribe('plans');
  const userId = Meteor.userId();
  return {
    plans: Plans.find({ schoolId: userId }, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(Admin);