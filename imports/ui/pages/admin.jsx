import React from 'react';
import { Meteor } from 'meteor/meteor';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'


const Admin = ({ currentUser = {}, plans = [] }) => (
  <Section>
    <HeaderCopy>
      <H1>School Admin</H1>
      <Link href={`/school/${currentUser._id}`}>{currentUser.school && currentUser.school.name}</Link>
      <Value>$320.00</Value>
    </HeaderCopy>
    <Tabs>
      <StyledTabList>
        <Tab>Plans</Tab>
        <Tab>Supporters</Tab>
        <Tab>Admin</Tab>
      </StyledTabList>

      <TabPanel>
        <PlansPanel>
          <AddPlanBtn href="/plan/create">New Plan</AddPlanBtn>
          <PlanList>
            <PlanHerderText>
              <div>Plans</div>
              <div>supporters</div>
              <div>Donations</div>
            </PlanHerderText>
            <ThePlans>
              { plans && plans.map(
                plan =>
                  <PlanListItem key={plan._id}>
                    <PlanNames>
                      <StudentName>{plan.studentName}</StudentName>
                      <PlanName>{plan.planName}</PlanName>
                    </PlanNames>
                    <PlanSupporters>
                      23
                    </PlanSupporters>
                    <PlanDonations>
                      $432
                    </PlanDonations>
                  </PlanListItem>
              ) }
            </ThePlans>
          </PlanList>
        </PlansPanel>
      </TabPanel>
      <TabPanel>
        <h2>supporter list here</h2>
      </TabPanel>
      <TabPanel>
        <h2>Admin form here</h2>
      </TabPanel>
    </Tabs>
  </Section>
);


const Section = styled.section`
font-family: HelveticaNeue;
margin-bottom: 26px;
`;

const HeaderCopy = styled.div`
text-align: center;
width: 100%;
margin: 42px 0;
padding: 0 20px;
`;

const Value = styled.div`
font-family: HelveticaNeue-Bold;
font-size: 18px;
color: #16C98D;
padding-top: 13px;
`;

const Link = styled.a`
font-size: 14px;
color: #0080BB;
font-weight: normal;
padding-bottom: 5px;
text-decoration: none;
`;

const H1 = styled.h1`
font-family: HelveticaNeue-Bold;
font-weight: normal;
font-size: 28px;
color: #111111;
line-height: 32px;
margin-bottom: 8px;
`;

const StyledTabList = styled(TabList)`
  padding: 0 20px;
  font-family: HelveticaNeue-Bold;
  font-size: 14px;
  color: #626369;
  > * {
    display: inline-block;
    padding-bottom: 22px;
    margin-right: 33px;
  }
  > li:nth-child(1) {
      border-bottom: 2px solid #0080BB;
    }

`;

const PlansPanel = styled.div`
  border-top: 1px solid #E6E7E8;
  padding: 40px 20px 0px;
`;

const AddPlanBtn = styled.a`
  background-color: #0080BB;
  display: block;
  text-align: center;
  border: none;
  padding: 16px 0;
  transition: background-color 400ms ease;
  text-decoration: none;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 37px;
  &:hover {
    background-color: #00B074;
  }
`;

const PlanList = styled.div`

`;

const PlanHerderText = styled.div`
font-family: HelveticaNeue-Medium;
font-size: 10px;
color: #9B9B9B;
  > * {
    display: inline-block;
    text-transform: uppercase;
    padding-bottom: 4px;
    border-bottom: 1px solid #F4F4F4;
  }
  > div:nth-child(1) {
      padding-right:180px;
    }
  > div:nth-child(2) {
      padding-right:35px;
    }
`;


const ThePlans = styled.div`

`;

const PlanListItem = styled.div`
   padding: 16px 0;
   border-bottom: 1px solid #F4F4F4;
`;


const PlanNames = styled.div`
  width: 214px;
  display: inline-block;
`;

const StudentName = styled.div`
  font-family: HelveticaNeue-Bold;
  font-size: 14px;
  color: #4A4A4A;
`;

const PlanName = styled.div`
  font-size: 10px;
  color: #9B9B9B;
  padding-top: 2px;
`;

const PlanSupporters = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  width: 103px;
  display: inline-block;
`;

const PlanDonations = styled.div`
  font-family: HelveticaNeue-Bold;
  font-size: 14px;
  color: #16C98D;
  display: inline-block;
`;


export default withTracker(props => {
  Meteor.subscribe('plans');
  const userId = Meteor.userId();
  return {
    plans: Plans.find({ schoolId: userId }, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(Admin);
