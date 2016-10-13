import {Mongo} from "meteor/mongo";

MESSAGES = new Mongo.Collection("messages",{
	transform:function(row){
		//row.username="Ditmaros";
		var user = Meteor.users.findOne({_id:row.user})
		if(!!user.profile)
		{
			row.username = user.profile.name; 
		}
		if(!!user.emails)
		{
			row.username = user.emails[0].address;
		}
		return row;
	}
});
MESSAGES.allow({
	insert:function(userId,params)
	{
		return !!userId;
	}
});
var messagesSchema = new SimpleSchema({
	msn: {
		type:String
	},
	date: {
		type:Date,
		autoValue:function() {
			return new Date();
		}
	},
	user: {
		type:String,
		autoValue:function(){
			return this.userId;
		}
	}
});
MESSAGES.attachSchema(messagesSchema);