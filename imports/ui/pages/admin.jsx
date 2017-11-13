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
      <Link href="#">School name</Link>
    </HeaderCopy>
    <Tabs>
      <StyledTabList>
        <Tab>{plans.length} plans</Tab>
        <Tab>0 Supporters</Tab>
        <Tab>Admin</Tab>
      </StyledTabList>

      <TabPanel>
        <ul>
          { plans && plans.map(plan => <li key={plan._id}>{plan.planName}</li>) }
        </ul>
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
padding: 0 20px;
margin-bottom: 26px;
`;

const HeaderCopy = styled.div`
text-align: center;
width: 100%;
margin: 42px 0;
`;

const Link = styled.a`
font-size: 16px;
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
  display: flex;
  > * {
		flex: 1;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  const userId = Meteor.userId();
  return {
    plans: Plans.find({ schoolId: userId }, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(Admin);