if (Meteor.isClient) {
  Session.set("greeting", "BUG! you should not see me!");

  Meteor.setTimeout(function(){
      Session.set("greeting", "if you can read me then everything is okay now, no bugs ;)");
  }, 10);

  Template.hello.greeting = function () {
    return Session.get("greeting");
  };
}

