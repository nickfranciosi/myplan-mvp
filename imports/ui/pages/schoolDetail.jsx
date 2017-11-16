import React from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'
import PlanCard from '../components/planCard';


const SchoolDetail = ({ schoolId, plans = [] }) => (
  <Section>
    <H2>Plans for school: {schoolId}</H2>
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

const H2 = styled.h2`
  font-family: HelveticaNeue-Bold;
  font-size: 28px;
  color: #111111;
  line-height: 36px;
  text-align: center;
  padding: 20px 0 50px;
  margin: 0 auto;
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
    plans: Plans.find({ schoolId: props.schoolId }, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(SchoolDetail);
