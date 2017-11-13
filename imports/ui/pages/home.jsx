import React from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PlanCard from '../components/planCard';
import NoResults from '../components/noResults';

import { Plans } from '../../api/plans.js'
import { fakePlans } from '../../fakeData';

const Home = ({ plans = [] , currentUser}) => (
  <Section>
    {currentUser && 
      <div>
        <a href="/plan/create">Add new plan</a><br />
        <a href={`/school/${currentUser._id}`}>See School Page</a><br />
        <a href={`/admin`}>See Admin Page</a>
      </div>
    }
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
 </Section>
);

const Section = styled.section`
  font-family: HelveticaNeue;
  padding: 0 20px;
  margin-bottom: 26px;
`;

const CardList = styled.div`
  margin: 0 auto;
`;

const CardListItem = styled.div`
  margin-bottom: 40px;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plans: Plans.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(Home);

