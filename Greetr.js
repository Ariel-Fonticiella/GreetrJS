/*******************************************************************************
  First, we create a new execution context for our entire Framework. All of the
  variables that are declared there are safe. We're only exposing what we want on 
  the Global Object. We do this by creating "Safe Code" by structuring an IIFE 
  around the code that we wrote.

  The first thing that happens is that the IIFE executes, creating a new Execution 
  Context giving us the variables we need to run. And so now the whole greeter is 
  safe inside of the IIFE and ready to be reused by anybody.
*******************************************************************************/



(function(global, $){

  // instead of being a function constructor, to avoid having
  // to always write the 'new' keyword, the function returns the results of a
  // different funciton constructor.

  var Greetr = function(firstName, lastName, language){

      // 'return new Greetr.init' will use a function constructor to generate
      // the object. That way you don't have to always setup the object with
      // the 'new' keyword. 

      return new Greetr.init(firstName, lastName, language);
  };

  // Greetr.init prototype points to this empty funciton.
  // We add all our methods and properties here.

  Greetr.prototype = {};

  // This is the actual Constructor Funciton being returned.

  Greetr.init = function(firstName, lastName, language) {

      // Create a variable named 'self' that points to 'this' so we know where it points later.

      // now 'self' points to the empty object created by the 'new' operator.

      var self = this;

      // Function Constructor now builds an object and gives it three properties
      // and sets its value if you pass something into the Funciton Constructor,
      // otherwise sets some defaults.

      self.firstName = firstName || " ";
      self.lastName  = lastName  || " ";
      self.language  = language  || "en";

  };

  // Any objects created with the Greetr.init function will point to
  // Greetr.prototype for it's prototype chain.

  Greetr.init.prototype = Greetr.prototype;

  // This will expose Greetr to the Global Object.
  // So, on the Global Object, the two names 'G$' and 'Greetr' will point to the 'var Greetr = (){...}' value.

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
