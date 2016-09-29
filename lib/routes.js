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
	action() {
		BlazeLayout.render("mainLayout",{ main:"layout" });
	}
});
