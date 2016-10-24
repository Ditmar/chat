import {Mongo} from "meteor/mongo";

ARTICLE = new Mongo.Collection("articles");
COMMENT = new Mongo.Collection("comments");

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
COMMENT.allow({
	insert:function(userId,params){
		return !!userId;
	}
});
ARTICLE.allow({
	insert:function(userId,params){
		console.log("--> ENTER ");
		return !!userId;
	}
});
MESSAGES.allow({
	insert:function(userId,params)
	{
		return !!userId;
	}
});
var articlesSchema =  new SimpleSchema({
	msn: {
		type:String
	},
	date: {
		type:Date,
		autoValue:function(){
			return new Date();
		}
	},
	user: {
		type:String,
		autoValue:function(){
			return this.userId
		}
	},
	mediaContent: {
		type:String,
		autoValue:function(){
			return "";
		}
	}
});
var commentSchema = new SimpleSchema({
	msn: {
		type:String,
	},
	date: {
		type:Date,
		autoValue: function(){
			return new Date();
		}
	},
	user:{
		type:String,
		autoValue:function(){
			return this.userId;
		}
	},
	idMsn:{
		type:String
	}
});
COMMENT.attachSchema(commentSchema);
ARTICLE.attachSchema(articlesSchema);
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