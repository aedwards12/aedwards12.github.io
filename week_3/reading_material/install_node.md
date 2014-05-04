# Installing Node.js

To install Node.js, visit [nodejs.org](http://nodejs.org/) and click the "install" button.  This should begin a download of the version appropriate for your operating system.  Once the download is complete, open the package and follow the instructions.

When the installation has completed, open Terminal and execute ...

```
$ node -v
```

If Node.js installed correctly, you should see which version was installed on your machine (e.g., v0.10.21).


### Read-Eval-Print-Loop (REPL)

With Node.js installed, you have access to a [REPL similar to IRB](http://nodejs.org/api/repl.html) (Interactive Ruby Shell).  Open Terminal and execute ...

```
$ node
```

You should see a `>` symbol, and you can now begin to write JavaScript.
Enter the following code ...

```javascript
var someVariable = 'some string'  // returns undefined
someVariable                      // returns 'some string'
5 + 5                             // returns 10
```

Control+D will exit.


### Execute JavaScript Files

You can also now use Node.js to execute a JavaScript file (*.js).  Just as with Ruby where, in the Terminal, you could execute ...

```
$ ruby file.rb
```

and have Ruby code execute, you can execute

```
$ node file.js
```

and have JavaScript code execute.

Copy the code below into a file and save it as `greet_torey.js`.

```javascript
var person = {firstName: "Torey", lastName: "Hickman"};
console.log("Greetings, " + person.firstName + " " + person["lastName"] + ".");
```

In Terminal, navigate to the directory in which you saved `greet_torey.js`.  Once there execute ...

```
$ node greet_torey.js
```

This should output ...

```
Greetings, Torey Hickman.
```