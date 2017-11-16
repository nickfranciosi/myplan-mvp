import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import styled from 'styled-components';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'
import PlanCard from '../components/planCard';


const PlanDetail = ({ plan = {} }) => (
  <div>
    <Section>
      <H2>
        {plan.studentName}
        <LinkToSchool href={`/school/${plan.schoolId}`}>
          {' - '}
          {plan.school && plan.school.name}
        </LinkToSchool>
      </H2>
      <H1>{plan.planName}</H1>
    </Section>
    <Media src={plan.media} />
    <Section>
      <Stats>
        <Stat color="#16C98D">
          {plan.amountRaised}$320.00
          <StatDescription>donations</StatDescription>
        </Stat>
        <Stat>
          {plan.daysRemaining}4
          <StatDescription>days to go</StatDescription>
        </Stat>
        <Stat>
          {plan.supporterCount}24
          <StatDescription>supporters</StatDescription>
        </Stat>
      </Stats>
    </Section>
    <Tabs>
      <Tab border="2px solid #0080BB">Plan</Tab>
      <Tab>Supporters</Tab>
    </Tabs>
    <Section>
      <PlanDescription>{plan.description}</PlanDescription>
    </Section>
    <DonateBtn href={`/plan/${plan._id}/donate`} >Support this plan</DonateBtn>
  </div>
);

const Section = styled.section`
  font-family: HelveticaNeue;
  padding: 0 20px;
`;

const H2 = styled.h2`
  font-size: 16px;
  color: #131313;
  font-weight: normal;
  padding: 26px 0 5px;
`;

const LinkToSchool = styled.a`
  text-decoration: none;
  color: #337FB6;
`;

const H1 = styled.h1`
  font-family: HelveticaNeue-Bold;
  font-weight: normal;
  font-size: 28px;
  color: #111111;
  line-height: 32px;
  padding-bottom: 46px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 46px 0;
`;

const Stat = styled.div`
  font-family: HelveticaNeue-Medium;
  font-size: 18px;
  color: ${props => props.color || '#111111'};
  flex: 0 1 auto;
`;

const Media = styled.div`
  background-image:url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 190px;
`;

const StatDescription = styled.p`
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #626369;
  padding-top: 6px;
`;

const Tabs = styled.div`
  border-bottom: 1px solid #E6E7E8;
  width: 100%;
`;

const Tab = styled.div`
  display: inline-block;
  margin-left: 20px;
  font-family: HelveticaNeue-Bold;
  font-size: 14px;
  color: #626369;
  padding: 0 0 14px;
  border-bottom: ${props => props.border || 'none'};
  cursor: pointer;
`;

const PlanDescription = styled.div`
  padding: 16px 0 90px;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #626369;
  line-height: 24px;
`;

const DonateBtn = styled.a `
  display: block;
  text-decoration: none;
  background: #16C98D;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #FFFFFF;
  padding: 16px 0;
  position: fixed;
  bottom: 16px;
  left: 20px;
  right: 20px;
  text-align: center;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plan: Plans.find(props.planId, { $limit: 1 }).fetch()[0],
    currentUser: Meteor.user(),
  };
})(PlanDetail);
