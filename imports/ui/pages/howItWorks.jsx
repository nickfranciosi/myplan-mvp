import React from 'react';
import styled from 'styled-components';

const HowItWorks = () => (
  <Section>
    <H2>How It Works</H2>
    <p>coming soon</p>
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

export default HowItWorks;
