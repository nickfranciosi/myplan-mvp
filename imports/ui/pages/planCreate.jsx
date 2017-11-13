import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';

export class PlanCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "",
      planName: "",
      endDate: "",
      media: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPlan = this.addPlan.bind(this);
  }

  addPlan(e) {
    e.preventDefault();
    Meteor.call('plans.insert', this.state);
    FlowRouter.go("/");
  }

  handleChange(e, field) {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  render() {
    return (
      <Section>
        <HeaderCopy>
          <H1>Plan details</H1>
          <Link href="#">School name</Link>
        </HeaderCopy>
        <form onSubmit={this.addPlan}>
          <fieldset>
            <Label htmlFor="studentName">Student</Label>
            <TextInput 
              type="text"
              placeholder="name"
              name="studentName"
              id="studentName"
              onChange={this.handleChange}
              value={this.state.studentName}
            />
          </fieldset>
          <fieldset>
            <Label htmlFor="planName">Plan</Label>
            <TextInput 
              type="text"
              placeholder="name"
              name="planName"
              id="planName"
              onChange={this.handleChange}
              value={this.state.planName}
            />
            <TextInput 
              type="date"
              name="endDate"
              id="endDate"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
            <TextInput 
              type="text"
              placeholder="image url"
              name="media"
              id="media"
              onChange={this.handleChange}
              value={this.state.media}
            />
            <StyledTextArea
              name="description" value={this.state.description} 
              onChange={this.handleChange}
              rows={10}
              placeholder="Description"
            />
          </fieldset>

          <Submit type="submit" value="Submit"/>
        </form>
      </Section>
    )
  }
 
};

const Section = styled.section`
  font-family: HelveticaNeue;
  padding: 0 20px;
  margin-bottom: 26px;
`;

const Label = styled.label`
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #131313;
  margin-bottom: 8px;
  display: inline-block;
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

const TextInput = styled.input`
  border: 1px solid #E0E0E2;
  border-radius: 4px;
  width: calc(100% - 1.2em);
  padding: 13px 0.6em;
  margin-bottom: 16px;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #4A4A4A;
  font-weight: normal;
  display: inline-block;
`;

const Submit = styled.input`
  font-family: HelveticaNeue;
  font-size: 16px;
  background: #0080BB;
  padding: 16px;
  color: #FFF;
  border: 0;
  width: 100%;
`;


const StyledTextArea = styled.textarea`
  border: 1px solid #E0E0E2;
  border-radius: 4px;
  width: calc(100% - 1.2em);
  padding: 13px 0.6em;
  margin-bottom: 16px;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #4A4A4A;
  font-weight: normal;
  display: inline-block;
`;