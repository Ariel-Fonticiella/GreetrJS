// First, we want to create a new execution context for our entire framework/library.

// So all of our variables that are declared are safe.

// And we're only exposing on the Global Object what we want.

// To do this we need to create "Safe Code".
// You can do this by structuring around the code that we are going to write.

// So the first thing that happens is that the IIFE executes, creating a new
// Execution Context giving us the variables we need to run.
// And so now my whole greeter is safe inside of the IIFE and ready to be
// reused by anybody.

(function(global, $){







}(window, jQuery));
