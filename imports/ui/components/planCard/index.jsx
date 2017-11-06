import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlanCard = ({
  student,
  school,
  planName,
  media,
  amountRaised,
  daysRemaining,
  supporterCount,
}) => (
  <CardWrapper>
    <ImageWrapper src={media} />
    <ContentWrapper>
      <StudentDetails>
        {student} - <a href={school.link}>{school.name}</a>
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


const CardWrapper = styled.div`
  width: 90%;
  border: 1px solid #E0E0E2;
  border-radius: 2px;
  max-width: 369px;
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
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold; 
  font-size: 22px;
  color: #111111;
  line-height: 1.27;
  margin-bottom: 16px;
`

const StudentDetails = styled.p`
 font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, sans-serif; 
  font-size: 14px;
  color: #99A9B2;
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  flex: 1;
    /* 4: */
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue";
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.color || '#111111'};
`;

const Description = styled.p`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue";
  font-size: 12px;
  font-weight: normal;
  color: #626369;
  margin-top: 4px;
`;

PlanCard.propTypes = {
  student: PropTypes.string,
  school: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  planName: PropTypes.string,
  media: PropTypes.string,
  amountRaised: PropTypes.number,
  daysRemaining: PropTypes.number,
  supporterCount: PropTypes.number,
};

export default PlanCard;