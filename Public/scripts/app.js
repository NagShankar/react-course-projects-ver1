"use strict";

// JSX - JavaScript XML
//simple JSX template // if multiple JSX elements are used then it must be enclosed/wrapped within a tag, in the below example div is used
//;ets change all to let and const wherever applicable, use const if not reassigning else use let if you're doing so, we're not re-assigning any variables here hence lets make them all const
var template = React.createElement("div", null, React.createElement("h1", null, "MotoGP constructors"), React.createElement("p", null, "There are 6 main teams"), React.createElement("ol", null, React.createElement("li", null, "Honda"), React.createElement("li", null, "Yamaha"), React.createElement("li", null, "Ducati"), React.createElement("li", null, "Suzuki"), React.createElement("li", null, "KTM"), React.createElement("li", null, "Aprilia")), React.createElement("br", null)); //yet another simple JSX template

var template2 = React.createElement("div", null, React.createElement("h3", null, "Honda Team"), React.createElement("ul", null, React.createElement("li", null, "Marc Marquez"), React.createElement("li", null, "Aleix Marquez"))); //using objects with JSX

var app = {
  title: 'My first Web App',
  //comment this to get the else output in ternary operator, note that ternary operation is a expression not statement, since it always evaluates
  subtitle: 'Done using React',
  //comment this to get the else output in AND operation
  year: 1993,
  //comment this and remove previous comma to get the else output in if condition
  age: 26,
  //comment this and remove previous comma to get the else output in if condition
  options: ['HTML ', 'JS ', 'React ', 'Node '] //comment this and remove previous comma to get the else output in the challenge

}; //creating JSX using above object

var template3 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title), React.createElement("p", null, "Subtitle: ", app.subtitle), React.createElement("p", null, "Year of devlelopment: ", app.year)); //conditional JSX

function getYear(year) {
  if (year) {
    return year;
  } else {
    return 'no year :(';
  }
}

var template4 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title), React.createElement("p", null, "Subtitle: ", app.subtitle), React.createElement("p", null, "Birth Year: ", getYear(app.year)));

function getYear2(year) {
  if (year) {
    //if year exists create a JSX expression else dont
    return React.createElement("p", null, "Year of birth:", year);
  } else {
    return undefined; //even if you dont have this undefined will be returned inplicitly
  }
}

var template5 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title), React.createElement("p", null, "Subtitle: ", app.subtitle), getYear2(app.year)); //using ternary operator

var template5_1 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title ? app.title : 'no title given'), React.createElement("p", null, "Subtitle: ", app.subtitle), getYear2(app.year)); //using logical AND operator

var template6 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title ? app.title : 'no title given'), React.createElement("p", null, "Subtitle: ", app.subtitle), app.age > 18 && React.createElement("p", null, "My Age: ", app.age), getYear2(app.year)); //challenge
//render subtitle(and p tag) only if it exists, use logical AND operator also check for its existence
//render new p tag- if options length is greater than 0, otherwise print 'no options' also check for options existence

var template7 = React.createElement("div", null, React.createElement("h1", null, "Project Title: ", app.title ? app.title : 'no title given'), app.subtitle && React.createElement("p", null, "Subtitle: ", app.subtitle), app.options && app.options.length > 0 ? React.createElement("p", null, "Here are the options: ", app.options) : React.createElement("p", null, "No options!"), app.age > 18 && React.createElement("p", null, "My Age: ", app.age), getYear2(app.year)); //...........................TIP: only one kind of comments inside JSX expression/templates works, {/* A JSX comment */}. Null, undefined and booleans values are all ignored in JSX and not printed in html file
//Forms and input

var app2 = {
  name: 'Indecision App',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form submitted!');
  var option = e.target.elements.option.value; //fetch value give in input name 'option' ans store it in variable option

  if (option) {
    app2.options.push(option); //push the value into 

    e.target.elements.option.value = ''; //emptying the input box

    renderingTemp(); //re rendering after pushing into app2.options
  }
};

function wipeAll() {
  app2.options = [];
  renderingTemp(); //re rendering after wiping out app2.options
}

function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app2.options.length); //math.random generate between 0 and 1, multiplying with array length gives random number between 0 and array length
  //console.log(randomNum);

  var selectedOption = app2.options[randomNum];
  alert(selectedOption);
}

var appRoot = document.getElementById('app');
/* function renderingTemp(){
    
    const template8=(
    <div>
       <h1>Name: {app2.name}</h1>
        <p>{app2.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app2.options.length}</p>
        <button disabled={app2.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
        <button onClick={wipeAll}>Remove All</button>
        
        <ol>
          {
            app2.options.map((option)=>{
               return <li key={option}>{option}</li>;
            })
          }
        </ol>
        
        
       <form onSubmit={onFormSubmit}>
             <input type="text" name="option"/>
             <button>Add option</button>
    
       </form>
    
    </div>


);
 ReactDOM.render(template8, appRoot);   
    
};


renderingTemp();

*/

/* visibility toggling challenge */

var visibility = false;

var toggleTrueFalse = function toggleTrueFalse() {
  visibility = visibility ? false : true; // or simply visibility=!visibility;

  console.log(visibility);
  renderVisibility();
};

var renderVisibility = function renderVisibility() {
  var template9 = React.createElement("div", null, React.createElement("h1", null, "Visibility Toggle"), React.createElement("button", {
    onClick: toggleTrueFalse
  }, visibility ? 'Hide Details' : 'Show Details'), visibility && React.createElement("div", null, React.createElement("p", null, "hey there you will see me")));
  ReactDOM.render(template9, appRoot);
};

renderVisibility();
