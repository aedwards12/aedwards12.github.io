[Week 3 Home](../)

# U1.W3: GPS 1.2 - JavaScript

**DO NOT READ THROUGH OR ATTEMPT THIS CHALLENGE BEFORE YOUR GUIDED PAIRING SESSION**

## Learning Competencies
1. Create and manipulate objects in JavaScript
2. Use functions in JavaScript
3. Debug using Node's error messages


## Summary
Aside from being totally awesome developers-in-training, you're also up-and-coming movie 
agents waiting to sign your first big star! 

You're gonna make it big in this business, so it'd be a good idea to create a way to
MANAGE ALL OF YOUR CLIENTS. We've compiled a list of things we want to be able to manage, and 
it just so happens we can use JavaScript to handle this. Let's get to work!

It's a rough industry, so to get things started, both you and your partner 
each get **one freebie**. You get to sign ANY actor/actress, so choose wisely!

## RELEASE 0: "You signed...Who?!"
Thinking in Javascript, let's find a way to store information for our two freebie clients. Before writing any code, it's very important to first discuss with your partner how you'd like to approach this. Do you know of more than one way to do this, and if so, what are the pros/cons of each? I want to know the following about each client:
  - Name
  - Age
  - Quote (your favorite, or just make one up!)

Once you've done this, make sure your code actually works by testing it in **Node**! How can we going about testing our code? This is a good opportunity to try out Screen Sharing in the Google Hangout (one person will share their Terminal).

## RELEASE 1: "Here they come!"
The following actors heard about your growing clientele, and want in! Create **Objects** for the following
individuals. Now that we have a growing **list** of clients, come up with a good way to store this information!

  Name: Adam Sandler<br>
  Age: 47<br>
  Quote: "That's your home! Are you too good for your home?!"<br>
  
  Name: Kristen Bell<br>
  Age: 33<br>
  Quote: "Do you wanna build a snowman?"<br>
  
  Name: Jim Carrey<br>
  Age: 52<br>
  Quote: "...So you're telling me there's a chance? YEAH!"<br>

Like before, make sure to test your code in Node! How can we access information within our Objects? If you know more than one way, do you know why we'd want to use one way over another? Accessing information in Objects is something that we'll be doing all the time in JavaScript, so make sure to discuss and ask questions!

## RELEASE 2: "Time is Money"
Well done! But we seem to be repeating ourselves quite a bit when creating our client Objects.
Let's find a more efficient way to do this!

*HINT* Creating new clients is something we plan to do often... What do we usually do with code that we want to reuse often?

If done correctly, the following test code should pass! Examine each, and ask questions if anything looks new! 

```javascript
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

```

## RELEASE 3: "Show 'em off!" 
You've done an incredible job making a names for yourselves! Now that you have all these clients, 
create a way to display each of them with their respective properties, and **make it look nice!**

## RELEASE 4: "But wait, there's more!"
Just like your clients, JavaScript Objects are capable of some awesome stuff! Not only can they hold simple information like strings and integers, but properties can also store **functions**! Pick any of the client objects you created, and assign it a property called ```showQuote``` that stores a function that will display that client's quote. Test your code!

## RELEASE 5: Bonus
Now that you're just as awesome at Javascript as you are in wrangling Hollywood talent,
try adding something new to your system! Want to manage something new from your clientele?
Or maybe a way to display/advertise your business? Get in there and Code with the Stars!

## Release 6: Reflect
In the reflection section of your 'my_solution.js` file, reflect on your learning using the [reflection guidelines](../reflection_guidelines.md). ***NOTE: Reflections are mandatory!***
