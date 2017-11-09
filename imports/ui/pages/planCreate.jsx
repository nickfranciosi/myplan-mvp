import React, { Component } from 'react';
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
  }

  handleChange(e, field) {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addPlan}>
          <fieldset>
            <label htmlFor="studentName">Student</label>
            <input 
              type="text"
              placeholder="name"
              name="studentName"
              id="studentName"
              onChange={this.handleChange}
              value={this.state.studentName}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="planName">Plan</label>
            <input 
              type="text"
              placeholder="name"
              name="planName"
              id="planName"
              onChange={this.handleChange}
              value={this.state.planName}
            />
            <input 
              type="date"
              name="endDate"
              id="endDate"
              onChange={this.handleChange}
              value={this.state.endDate}
            />
            <input 
              type="text"
              placeholder="image url"
              name="media"
              id="media"
              onChange={this.handleChange}
              value={this.state.media}
            />
            <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
          </fieldset>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
 
};