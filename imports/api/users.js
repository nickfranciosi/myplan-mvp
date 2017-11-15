import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Accounts } from 'meteor/accounts-base';


if (Meteor.isServer) {
  
  Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId}, {fields: {school: 1}});
  });
  
}

Meteor.methods({
  'users.insert'(user) {
   Accounts.createUser(user);
  }
});

Accounts.onCreateUser((options, user) => {
  user._id = Random.id(); 
  user.school = {
    id: user._id,
    name: options.schoolName,
    address: {
      street: options.street,
      city: options.city,
      zip: options.zip,
    }
  };

  return user;
});