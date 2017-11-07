import React from 'react';
import styled from 'styled-components';
import PlanCard from '../components/planCard/index';
import { fakePlans } from '../../fakeData';

export const Home = () => (
  <CardList>
    {fakePlans.map(plan => {
      return(
        <CardListItem key={plan._id}>
          <PlanCard  {...plan}/>
        </CardListItem>
      );
    })}
  </CardList>
);

const CardList = styled.div`
  margin: 0 auto;
`;

const CardListItem = styled.div`
  margin-bottom: 40px;
`;