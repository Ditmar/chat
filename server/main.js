import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.publish("getMsn",function(){
		return MESSAGES.find();
	});
	Meteor.publish("getUsers",function(){
		return Meteor.users.find();
	});
});
