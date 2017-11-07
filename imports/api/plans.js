import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Plans = new Mongo.Collection('plans');

if (Meteor.isServer) {

  Meteor.publish('plans', function plansPublication() {
    return Plans.find();
  });
}

Meteor.methods({
  'plans.insert'(plan) {
 
    // Make sure the user is logged in before inserting a plan
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
   
    Plans.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      ...plan,
    });
  },
});