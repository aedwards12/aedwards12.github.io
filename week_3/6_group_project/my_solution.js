function sum(array) {             // Created a sum method with a parameter of 'array'
  var sum = 0               //counter starts at 0
  for( i = 0; i < array.length; i++)  //take an array then increments based on inserted values
  {
    sum +=array[i];             //adds the sum of the array. 
  }

  return sum;               //returns the sum of the array.
};

// console.log("The sum is: " + Sum([2,3,4,5,6,7,3]));


function mean(x) {                //created a mean method called mean with a parameter of 'x'.
  var average = sum(x)/x.length;        //set variable to previousley called Sum method then divide 
  {                     //by length of array list.
  return average;               //return variable that contains method
  }
};


// console.log("The Mean is: " + Mean([2,4,6]));       //Call/print method


function median(x) {
  var cut = Math.floor(x.length / 2);             //store the floor function value of x divided by 2

  var x = x.sort(function(a, b){return a-b});     //sort the array in accending order

  if (x.length % 2 === 0){              // if x is of even length  add the two middle values and divide by 2
    return (x[cut] + x[cut - 1 ])/ 2; 
  } else {
    return x[cut];
  }
};


// console.log("The Median is: " + median([13,23,12,44,55]));

/*My Reflection
This challenge was pretty cool. It was nice but stressful to work with a group while all of us are on different schedules. 
Time management was key.  I did not want to be that guy to keep our group behind. I did the refactoring part. I had fun looking
at my partners code and trying to figure out ways to improve it.  I think I did that in this challenge.  I had a rough time understand
what is was that we were able to do. Overall I like it I am ready for the next one!

*/
// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)
