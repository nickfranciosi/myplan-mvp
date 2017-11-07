import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class PlanCreate extends Component {

  addPlan() {
    Meteor.call('plans.insert',  {
      student:"Jane Doe",
      school: {
        name: "Road Meadows Middle School",
        link: "/school/road-meadows-middle-school",
      },
      planName:"Geography Chocolate Company",
      media:"http://lorempixel.com/400/200/",
      amountRaised:"$300",
      daysRemaining: 10,
      supporterCount: 22,
    },);
  }

  render() {
    return (
      <div>
        <h2>Create plan</h2>
        <button onClick={this.addPlan}>Add Plan</button>
      </div>
    )
  }
 
};