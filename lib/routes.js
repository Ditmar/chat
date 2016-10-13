FlowRouter.route("/", {
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"forms"});
	}
});
FlowRouter.route("/aboutus", {
	name:"aboutus",
	action() {
		BlazeLayout.render("mainLayout",{ main:"about" });
	}
});
FlowRouter.route("/chat", {
	name:"chat",
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
	
	},
	action() {
		BlazeLayout.render("mainLayout",{ main:"layout" });
	}
});
