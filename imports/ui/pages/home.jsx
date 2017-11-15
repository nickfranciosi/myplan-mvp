import React from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PlanCard from '../components/planCard';
import NoResults from '../components/noResults';

import { Plans } from '../../api/plans.js'
import { fakePlans } from '../../fakeData';

const Home = ({ plans = [] , currentUser}) => {
  return (
    <div>
      <HeroMasthead>
        <HeroHeading>Empowering young entrepreneurs one school at a time.</HeroHeading>
        <HeroCopy>With myplan you can raise money while teaching your students how create a product.</HeroCopy>
        {currentUser ? 
          <HeroLink href="/plan/create">Add a plan</HeroLink> :
          <HeroLink href="/signup">Add your school</HeroLink>
        }
      </HeroMasthead>
      <Section>
        {currentUser && 
          <div>
            <a href={`/school/${currentUser._id}`}>My School Page</a><br />
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
  </div>
  )
};

const HeroMasthead = styled.div`
  font-family: HelveticaNeue;
  background-image: url("/assets/images/homeHero@2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 443px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 56px;
  > * {
    max-width: 345px;
  }
`;

const HeroHeading = styled.h1` 
  font-size: 38px;
  line-height: 1.22;
  margin-bottom: 21px;
`;

const HeroCopy = styled.p`
  font-size: 16px;
  line-height: 1.56;
  margin-bottom: 35px;
`;

const HeroLink = styled.a`
  background-color: #16C98D;
  border: none;
  color: #fff;
  min-width: 177px;
  padding: 16px 0;
  font-family: HelveticaNeue;
  font-size: 14px;
  transition: background-color 400ms ease;
  text-decoration: none;
  &:hover {
    background-color: #00B074;
  }
`;


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

