import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Plans = new Mongo.Collection('plans');

if (Meteor.isServer) {

  Meteor.publish('plans', function plansPublication() {
    return Plans.find();
  });

  Meteor.publish('plans.currentUser', function() {
    if (!this.userId) {
      return this.ready();
    }
    return Plans.find({
      schoolId: this.userId
    },{ 
      sort: { createdAt: -1},
    });
  });
}

Meteor.methods({
  'plans.insert'(plan) {
 
    // Make sure the user is logged in before inserting a plan
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
   console.log({plan});
    Plans.insert({
      school: {
        name: "Test School",
        link: "/school/test-school",
      },
      schoolId: Meteor.userId(),
      ...plan,
    });
  },
});