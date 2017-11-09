import React from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'
import PlanCard from '../components/planCard';


const SchoolDetail = ({ schoolId, plans = [] }) => (
  <div>
    <h2>Plans for school: {schoolId}</h2>
    <CardList>
      {plans.length !== 0 && plans.map(plan => {
        return(
          <CardListItem key={plan._id}>
            <PlanCard  {...plan}/>
          </CardListItem>
        );
      })}

      {!plans.length && <NoResults />}
    </CardList>
  </div>
);

const CardList = styled.div`
margin: 0 auto;
`;

const CardListItem = styled.div`
margin-bottom: 40px;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plans: Plans.find({ schoolId: props.schoolId }, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(SchoolDetail);