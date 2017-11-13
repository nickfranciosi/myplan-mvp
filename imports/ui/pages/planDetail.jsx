import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import styled from 'styled-components';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'
import PlanCard from '../components/planCard';


const PlanDetail = ({ plan = {} }) => (
  <Section>
    <PlanCard  {...plan}/>
    <h3>Description: </h3>
    <p>{plan.description}</p>
    <a href={`/plan/${plan._id}/donate`}>Support this plan</a>
  </Section>
);

const Section = styled.section`
  font-family: HelveticaNeue;
  padding: 0 20px;
  margin-bottom: 26px;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plan: Plans.find(props.planId, { $limit: 1 }).fetch()[0],
    currentUser: Meteor.user(),
  };
})(PlanDetail);