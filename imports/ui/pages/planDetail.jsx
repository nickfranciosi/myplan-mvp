import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'
import PlanCard from '../components/planCard';


const PlanDetail = ({ plan = {} }) => (
  <div>
    <PlanCard  {...plan}/>
    <h3>Description: </h3>
    <p>{plan.description}</p>
    <a href={`/plan/${plan._id}/donate`}>Support this plan</a>
  </div>
);

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plan: Plans.find(props.planId, { $limit: 1 }).fetch()[0],
    currentUser: Meteor.user(),
  };
})(PlanDetail);