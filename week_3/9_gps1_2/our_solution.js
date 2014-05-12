// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Steve Loar
//  2.Anthony Edwards Jr


// 1. "YOU SIGNED... WHO?!"
//Pseudocode
// variable name
// var age
// var quote


var denzelWashington = { Name: "Denzel Washington", Age: 35, Quote: "My Man!" };
var tomHanks = { Name: "Tom Hanks", Age: 50, Quote: "I love all my movies." };

// 2. "Here they Come!"

var AdamSandler = {name: "Adam Sandler", Age: 47, Quote: "That's your home! Are you too good for you home!" };
var KristenBell = {name: "Kristen Bell", Age: 33, Quote: "Do you wanna build a snowman" };
var JimCarrey = {name: "Jim Carrey", Age: 52, Quote: "So you're telling me there's a chance? YEAH!" };


// 3. "TIME IS MONEY!"
function Client(Name, Age, Quote) {
    this.Name = Name;
    this.Age = Age;
    this.Quote = Quote;
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

console.log(AdamSandler.name + " " + AdamSandler.Age + " " +  AdamSandler.Quote);
console.log(KristenBell.name + " " + KristenBell.Age + " " +  KristenBell.Quote);
console.log(JimCarrey.name + " " + JimCarrey.Age + " " +  JimCarrey.Quote);

AdamSandler.showQuote = function() {
    console.log(this.name + " " + this.Age + " " +  this.Quote);
};

AdamSandler.showQuote();

// ** BONUS **


//  Your Reflection:
/*GPS 1.2 was okay for me this go around. I was not nearly as prepared as I would like to be. This week i had exams and projects
due for college. Therefore i was not able to spend as much time completeing my challenges and learning the material. Steven my
partner in crime was awesome. He had a very good understanding of Javascript objects and was really the driving force in our challenge
We had a rough time at first because we were both tentative not to do to much and  be bossy.  We eventually found our groove and 
everthing was well. 
*/
