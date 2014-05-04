# JavaScript Object Types

JavaScript provides a number of different native object types:  numbers, strings, booleans, arrays, dates, regular expressions, errors, functions, and objects.

Similar to Ruby, there are multiple ways to instantiate a new object.  In Ruby, you could choose between the following approaches to create a new array.

```ruby
array = Array.new           #  => []

# or ...

array = []                  #  => []
```

We can create new objects similarly in JavaScript.

All of the JavaScript object types mentioned have a constructor function; you'll learn about constructor functions in Phase 2.  Initializing an object in a manner similar to calling `Array.new` in Ruby would look like this.

```javascript
array = new Array()          // => []

```

In Phase 0, focus on literal notation (shown below).  It is similar to the second appoach in the Ruby example.  Most object types can be instantiated through literal notation; dates and errors cannot be.

Here are examples of instantiating different object types using literal notation.

```javascript
// a number
var someNumber = 5;

// a string
var someString = "Hello.";

// a boolean
var someBoolean = true;

// an array
var someArray = ["A", "B", "C"];

// a function
var someFunction = function(string){ console.log(string) };

// an object
var someObject = { property: "value" };
```

Click here to go to the [JavaScript Introduction](javascript_intro_lab/readme.md).