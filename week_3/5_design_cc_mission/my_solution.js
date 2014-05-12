// I worked [by myself, with:] on this challenge
//By myself
// Your mission description:
// Your objective is to design a soccer moms day. she has to 
//take her kids to school, feed them breakfast, lunch dinner, take her son to practise,
// her daughter to a piano class and put the kids to sleep.
// 
// 

// Pseudocode
// make a parent function
// make function to pick up kids, feed them, take son to practise, take daughter piano, and put kids to sleep
// 
// 
// 

// Initial Code
/*
var parent = {

	this.name = "Ammy";
	
	this.feedKids:function(){
		return "I feeding the kids French Toast with eggs and bacon!";
	};

	this.getinfo: function(){
		return this.name;
	};
}


function Parent(name){ 
this.name = name;
console.log('Person instantiated ' + this.name);

this.feedKids = function(){
		console.log("I feeding the kids French Toast with eggs and bacon!");
	};
this.school = function(){
	console.log('taking kids to school');
}
this.pickUp = function(){
	console.log('taking kids to school');
}
this.drive = function( kid, location){
	console.log('Taking ' + kid +  ' to ' + location + ' .');
	}

this.drive = function(){
	console.log('putting kids to bed');
	}
};
var Tammy = new Parent('Tammy');
Tammy.feedKids();
Tammy.school();
Tammy.pickUp();
Tammy.drive('matt', 'soccer practise');
Tammy.drive('Ana', 'piano lessons');
Tammy.drive('kids', 'home');
Tammy.feedKids();
Tammy.drive();
*/


// Refactored Code

function Parent(name){ 
	this.name = name;
	console.log('Person instantiated ' + this.name);

	this.feedKids = function(food, meal){
		console.log('Feeding the kids ' + food + ' for ' + meal + '.' );
	};
	this.pickUp = function(){
		console.log('taking kids to school');
	}
	this.drive = function( kid, location){
		console.log('Taking ' + kid +  ' to ' + location + ' .');
	}
	this.sleep = function(){
		console.log("Putting kids to sleep.");
	}
};
var Tammy = new Parent('Tammy');
Tammy.feedKids('French Toast and eggs', 'breakfast');
Tammy.drive('kids', 'school');
Tammy.drive('kids', 'Home');
Tammy.drive('matt', 'soccer practise');
Tammy.drive('Ana', 'piano lessons');
Tammy.drive('kids', 'home');
Tammy.feedKids('Steak and broccoli', 'dinner');
Tammy.sleep();




// Reflection
// This challenge was pretty cool. I had a hard time deciding what to do. This was just a simple program that 
// designed a typical day of a soccer mom. My goal was to use object for this challenge and implement methods of the object using 
// the .this operator.  My frustration was that i could not get the objects to work right away to had to do some extra research on 
// instanciating new obects. Im still getting used to writing the user idea, then psuedocode. Im used to just writing pseudocode then 
// writing my code. All that extra some seem alittle tedious right now. 
// 
// 
// 