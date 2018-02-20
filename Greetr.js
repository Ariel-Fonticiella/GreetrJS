/*******************************************************************************
  Greetr is a reusable library/framework for, you guessed it, Greetings!

  Greetr takes three parameters: firstName, lastName, and (optional) language. it will generate formal and informal greetings.

  When given a first name, last name, and optional language, Greetr will generate a formal and informal greetings in a specified language.

  Greeter supports: English, Spanish.
*******************************************************************************/

// First, we create a new execution context for our entire library. All of the variables that are declared are safe. We're only exposing on the Global Object what we want. We do this by structuring an IIFE around the code that we wrote, thus making it safe code.

;(function(global, $){
  // We pass two arguments which will be what we need access too. These arguments are the Global Variable 'global' and the jQuery variable '$'.

  let Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
        // To avoid always writing the 'new' keyword, this function returns the results of a different funciton constructor.
  };

/* The following variable will not be exposed to the outside, so they can't be changed, unless allowed to. These variables are set up as objects and not arrays because we want to reference them by their 'name: vaule'  pair, that is, by the name of the property. This will make it easier to change dynamically */

  let supportedLangs = ['en', 'es'];

  let greetings = {
        en: 'Hello',
        es: 'Hola'
      }; // We refernece the object's property with a string.

  let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
      };

  let logMessages = {
        en: 'Logged in',
        es: 'Inició Sesión'
      };

/* In order to save memory space, we put all the Methods and Properties that are generated by each instance of the 'Greetr.init' object in the 'Greetr.prototype' object. All these Methods and Properties will be exposed to the outside. */

  Greetr.prototype = {

    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
        if (supportedLangs.indexOf(this.language) === -1) {
          throw "Invalid Language";
        }
        // the 'validate method' checks what language is being requested and
        // throws an error if it's not supported.
        // if indexOf returns -1, lang isn't found. Otherwise return a 0 or a 1
    },

    greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
          // This will grab the 'greetings' var based on the language chosen.
          // the bracket opperator [this.language] will grab whatever is set up
          // as the language in the object.
    },

    formalGreeting: function() {
        return formalGreetings[this.language] + ', ' + this.fullName();
        // This will find the 'formalGreetings' object and grab it's properties
        // by name, using the chosen language.
    },

    /* To keep from always having to call 'greeting()' or 'formalGreeting()', with the 'greet' method, you can just pass whether or not you want the greeting to be formal */
    greet: function(formal){
          let msg;

          if (formal) {
            // if 'undefined' or 'null' it will be coerced to 'false'.
            msg = this.formalGreeting();
          } else {
            msg = this.greeting();
          }

          if (console) {
              console.log(msg);
          }

          return this;
            // 'this' refers to the calling object at execution time and makes
            // the method chainable. Meaning you can call the object and then
            // the method and then dot another method.
    },

    log: function() {
        if (console) {
            console.log(logMessages[this.language] + ': ' + this.fullName());
        }
        return this;
    },

    setLang: function(lang) {
        this.language = lang;
          // Update my object with the 'language' passed in.
        this.validate();
          // Then call 'validate' to make sure that it's valid.
        return this;
          // We return 'this' to make it chainable.
    },

    HTMLGreeting: function(selector, formal) {
        if (!$) {
            throw 'jQuery not loaded';
            // If we don't have jQuery, throw error: 'jQuery no loaded'
        }

        if (!selector){
          throw 'Missing jQuery selector';
          // If we don't have a selector, throw error: 'Missing jQuery selector';
        }

        let msg;
        if (formal) {
            msg = this.formalGreeting();
        } else {
            msg = this.greeting();
        }
        // Depending on whether you pass a 'formal' parameter or not, this is
        // the string it will use.

        $(selector).html(msg);

        return this;
    }


  }; // Greetr.prototype -- END

  Greetr.init = function(firstName, lastName, language) {
      // This is the actual constructor funciton object being returned.

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

      self.validate();
        // Will run the validate method upon inital creation of object.

  };// Greetr.init -- END

  Greetr.init.prototype = Greetr.prototype;
    // Any objects created with the Greetr.init function will point to
    // Greetr.prototype for it's prototype chain.

  global.Greetr = global.G$ = Greetr;
    // This will expose Greetr to the Global Object, bc we pass in 'window' as
    // the 'global' argument.

    // So, on the Global Object, the two names '.G$' and '.Greetr' will point to
    // the 'var Greetr = function(){...}' value.

}(window, jQuery)); // function(global, $) -- END
