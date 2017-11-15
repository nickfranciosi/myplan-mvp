import React from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withTracker } from 'meteor/react-meteor-data';
import { Plans } from '../../api/plans.js'

const Donate = ({ plan = {} }) => (
  <Section>
    <H2>{plan.studentName} - {plan.school && plan.school.name}</H2>
    <H1>{plan.planName}</H1>
    <FormFields>

      <Spread>
        <Amount>$60</Amount>
        <AmountHighlighted>$80</AmountHighlighted>
        <Amount>$100</Amount>
      </Spread>

      <Cur>USD</Cur>

      <AmountField
        type="text"
        value="80.00"
        name="amount"
      />

      <TextInput
        type="text"
        placeholder="Name"
        name="name"
      />

      <TextInput
        type="email"
        placeholder="Email address"
        name="email"
      />

      <Spread>
        <SplitField
          type="text"
          placeholder="Street"
          name="street"
        />
        <Spacer/>
        <SplitField
          type="text"
          placeholder="Zip"
          name="zip"
        />
      </Spread>

      <TextInput
        type="text"
        placeholder="City"
        name="city"
      />

      <TextInput
        type="text"
        placeholder="Card number"
        name="CC"
      />

      <SmallPrint >
        By paying you are agreeing to myplan’s terms, fees, and privacy policy.
      </SmallPrint>

      <SubmitBtn
        type="submit"
        value="Submit donation"
      />

    </FormFields>
  </Section>
);

const Section = styled.section`
  font-family: HelveticaNeue;
  padding: 26px 20px;
`;

const H2 = styled.h2`
  font-size: 16px;
  color: #131313;
  font-weight: normal;
  padding-bottom: 5px;
`;

const H1 = styled.h1`
  font-family: HelveticaNeue-Bold;
  font-weight: normal;
  font-size: 28px;
  color: #111111;
  line-height: 32px;
`;

const FormFields = styled.form`
  padding: 48px 0;
  position: relative;
`;

const Spread = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Spacer = styled.div`
  flex: 0 1 auto;
  width: 32px;
`;

const Amount = styled.div`
  flex: 0 1 auto;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #16C98D;
  background: #F7F7F7;
  border: 1px solid #E0E0E2;
  padding: 16px 0;
  width: 111px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
`;

const AmountHighlighted = Amount.extend`
  background: #16C98D;
  color: #fff;
  border: 1px solid #fff;
`;

const TextInput = styled.input`
  border: 1px solid #E0E0E2;
  border-radius: 4px;
  width: calc(100% - 1.2em);
  padding: 13px 0.6em;
  margin-top: 16px;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #4A4A4A;
  font-weight: normal;
  display: inline-block;
`;

const SplitField = TextInput.extend`
  flex: 0 1 auto;
`;

const AmountField = styled.input`
  border: 1px solid #E0E0E2;
  border-radius: 4px;
  width: calc(100% - 1.2em);
  padding: 13px 0.6em;
  margin-top: 16px;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #4A4A4A;
  font-weight: normal;
  display: inline-block;

  font-family: HelveticaNeue-Bold;
  font-size: 20px;
`;

const Cur = styled.div`
  color: #4A4A4A;
  display: inline-block;
  position: absolute;
  top: 135px;
  right: 0.6em;
`;

const SmallPrint = styled.div`
  font-size: 10px;
  color: #A6A6AB;
  padding-top: 8px;
  display: inline-block;
`;

const SubmitBtn = styled.input`
  background: #16C98D;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  padding: 16px 0;
  width: 100%;
  margin-top: 40px;
  display: inline-block;
  border: 0;
  cursor: pointer;
`;

export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    plan: Plans.find(props.planId, { $limit: 1 }).fetch()[0],
    currentUser: Meteor.user(),
  };
})(Donate);
