import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlanCard = ({
  _id,
  studentName,
  school,
  planName,
  media,
  amountRaised,
  daysRemaining,
  supporterCount,
}) => (
  <CardWrapper href={`/plan/${_id}`}>
    <ImageWrapper src={media} />
    <ContentWrapper>
        <StudentDetails>
          {studentName} - {school && school.name}
        </StudentDetails>
      <Title>{planName}</Title>
      <StatsContainer>
        <Stat color="#16C98D">
          <p>{amountRaised}</p>
          <Description>donations</Description>
        </Stat>
        <Stat>
          <p>{daysRemaining}</p>
          <Description>days to go</Description>
        </Stat>
        <Stat>
          <p>{supporterCount}</p>
          <Description>supporters</Description>
        </Stat>
      </StatsContainer>
    </ContentWrapper>
  </CardWrapper>
);


const CardWrapper = styled.a`
  display: block;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, sans-serif;
  width: 100%;
  border: 1px solid #E0E0E2;
  border-radius: 2px;
  max-width: 369px;
  margin: 0 auto;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  background-image:url(${props => props.src}); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 169px;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-weight: bold; 
  font-size: 22px;
  color: #111111;
  line-height: 1.27;
  margin-bottom: 16px;
`

const StudentDetails = styled.p`
  font-size: 14px;
  color: #99A9B2;
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.color || '#111111'};
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #626369;
  margin-top: 4px;
`;

PlanCard.propTypes = {
  studentName: PropTypes.string,
  school: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  planName: PropTypes.string,
  media: PropTypes.string,
  amountRaised: PropTypes.string,
  daysRemaining: PropTypes.number,
  supporterCount: PropTypes.number,
};

export default PlanCard;