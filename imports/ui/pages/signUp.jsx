import React from 'react';
import styled from 'styled-components';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      schoolName: "",
      street: "",
      city: "",
      zip: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();
    Meteor.call('users.insert', this.state, (error) => {
      Meteor.loginWithPassword(this.state.email, this.state.password, (e) => {
        FlowRouter.go("/admin");
      });
    });
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
        <H1>Create account</H1>
        <Detail>Create your myplan account and add your school</Detail>
      </HeaderCopy>
      <FormFields onSubmit={this.addUser}>
        <fieldset style={{ marginBottom: "36px" }}>
          <Label htmlFor="email">Admin</Label>
          <TextInput
            type="email"
            placeholder="Email address"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <TextInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="schoolName">School</Label>
          <TextInput
            type="text"
            placeholder="Name"
            name="schoolName"
            onChange={this.handleChange}
            value={this.state.schoolName}
          />
          <Spread>
            <SplitField
              type="text"
              placeholder="Street"
              name="street"
              onChange={this.handleChange}
              value={this.state.street}
            />
            <Spacer/>
            <SplitField
              type="text"
              placeholder="Zip"
              name="zip"
              onChange={this.handleChange}
              value={this.state.zip}
            />
          </Spread>
  
          <TextInput
            type="text"
            placeholder="City"
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          />
        </fieldset>
        <SubmitBtn
          type="submit"
          value="Create account"
        />
  
      </FormFields>
    </Section>
  );
 }
}

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
  margin-bottom: 11px;
`;

const Detail = styled.p`
  font-size: 14px;
  color: #4A4A4A;
`;

const HeaderCopy = styled.div`
  text-align: center;
  width: 100%;
  margin: 42px 0 67px;
`;

const Link = styled.a`
  font-size: 16px;
  color: #0080BB;
  font-weight: normal;
  padding-bottom: 5px;
  text-decoration: none;
`;

const FormFields = styled.form`
  position: relative;
`;

const Label = styled.label`
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
  color: #131313;
  margin-bottom: 8px;
  display: inline-block;
`;

const Spread = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Spacer = styled.div`
  flex: 0 1 auto;
  width: 32px;
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

const SubmitBtn = styled.input`
  background: #0080BB;
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

export default SignUp;