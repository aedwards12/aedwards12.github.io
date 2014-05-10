function Sum(array) { 						// Created a sum method with a parameter of 'array'
	var sum = 0								//counter starts at 0
	for( i = 0; i < array.length; i++)  //take an array then increments based on inserted values
	{
		sum +=array[i]; 						//adds the sum of the array. 
	}

	return sum;								//returns the sum of the array.
};

console.log("The sum is: " + Sum([2,3,4,5,6,7,3]));		//prints string of array to console. 


function Mean(x) {								//created a mean method called mean with a parameter of 'x'.
	var average = Sum(x)/x.length;				//set variable to previousley called Sum method then divide 
	{											//by length of array list.
	return average;								//return variable that contains method
	}
};


console.log("The Mean is: " + Mean([2,4,6]));				//Call/print method

function Median(x) {
	var cut = Math.floor(x.length / 2);        			//store the floor function value of x divided by 2

	var x = x.sort(function(a, b){return a-b});			//sort the array in accending order
		
	if (x.length % 2 === 0){							// if x is of even length  add the two middle values and divide by 2
		return (x[cut] + x[cut - 1 ])/ 2; 
	} else {
		return x[cut];
	}
};

console.log("The Median is: " + Median([13,23,12,44,55]));

