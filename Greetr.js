/*******************************************************************************
  Greeter is a reusable library/framework that is used for, you guessed it, Greetings!

  When given a first name, last name, and optional language, it will generate formal and informal greetings.

  Greeter supports: English and Spanish languages, jQuery.
*******************************************************************************/

// First, we create a new execution context for our entire Framework.
// All of the variables that are declared are safe. We're only exposing
// on the Global Object what we want. We do this by creating "Safe Code" by
// structuring an IIFE around the code that we wrote.

(function(global, $){
  // We pass two arguments which will be what we need access to. These
  // arguments are the Global Variable 'global' and the jQuery variable '$'.

  let Greetr = function(firstName, lastName, language){

      return new Greetr.init(firstName, lastName, language);
        // To avoid always writing the 'new' keyword, this function returns the // results of a different funciton constructor.
  };

  //  Our Methods and Properties
  //  are all added here.
  //                  |
  Greetr.prototype = { };

  Greetr.init = function(firstName, lastName, language) {
      // This is the actual Constructor Funciton being returned.

      let self = this;
        // We create a variable named 'self' that points to the 'this' keyword
        // so we know where it points later. Now 'self' points to the empty
        // object that was created by the 'new' operator returned by Greetr.

      self.firstName = firstName || " ";
      self.lastName  = lastName  || " ";
      self.language  = language  || "en";
        // The function constructor now builds an object and gives it three
        // properties and sets their value's if you pass something into the
        // funciton construct, otherwise it will set some defaults.

  };

  Greetr.init.prototype = Greetr.prototype;
    // Any objects created with the Greetr.init function will point to
    // Greetr.prototype for it's prototype chain.

  global.Greetr = global.G$ = Greetr;
    // This will expose Greetr to the Global Object, bc we pass in 'window' as
    // the 'global' argument.

    // So, on the Global Object, the two names '.G$' and '.Greetr' will point to
    // the 'var Greetr = function(){...}' value.

}(window, jQuery)); // function(global, $)
