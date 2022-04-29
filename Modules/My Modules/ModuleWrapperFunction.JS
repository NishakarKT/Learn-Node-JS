// Behind the scenes

// Module wrapper function, the actual javascript function inside which we write our codes...
(function(exports, require, module, __filename, __dirname){ // these parameters/arguments are the reason why we can use module.exports, require func etc.
    const str = "Hello World";
    // console.log(str);
    // my codes
})();

// enclosed in round braces => private... :)
// codes inside IIFE are private...
// Example:-
(function(){
    var name = "Nishakar Kumar";
    console.log("Hello World!!!");
    // my codes
})();
console.log(name); // even though var name; is a global variable, we can't access the IIFE content :)...