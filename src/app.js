// JSX - JavaScript XML


//simple JSX template // if multiple JSX elements are used then it must be enclosed/wrapped within a tag, in the below example div is used

//;ets change all to let and const wherever applicable, use const if not reassigning else use let if you're doing so, we're not re-assigning any variables here hence lets make them all const
const template = (
  <div> 
        <h1>MotoGP constructors</h1>
        <p>There are 6 main teams</p>
        <ol>
           <li>Honda</li>
           <li>Yamaha</li>
           <li>Ducati</li>
           <li>Suzuki</li>
           <li>KTM</li>
           <li>Aprilia</li>
        </ol><br/>
   </div>
);

//yet another simple JSX template
const template2=(
    <div>
       <h3>Honda Team</h3>
        <ul>
            <li>Marc Marquez</li>
            <li>Aleix Marquez</li>
        </ul>
    
    </div>

);

//using objects with JSX
var app = {
  title:'My first Web App',  //comment this to get the else output in ternary operator, note that ternary operation is a expression not statement, since it always evaluates
  subtitle:'Done using React', //comment this to get the else output in AND operation
  year:1993,   //comment this and remove previous comma to get the else output in if condition
  age:26, //comment this and remove previous comma to get the else output in if condition
  options:['HTML ', 'JS ', 'React ', 'Node '] //comment this and remove previous comma to get the else output in the challenge
};

//creating JSX using above object
const template3 = (
    <div>
        <h1>Project Title: {app.title}</h1>
        <p>Subtitle: {app.subtitle}</p>
        <p>Year of devlelopment: {app.year}</p>
        
   </div>
);


//conditional JSX
function getYear(year){
    if(year){
        return year;
    }else{
       return 'no year :(';
    }
 }


const template4 = (
    <div>
        <h1>Project Title: {app.title}</h1>
        <p>Subtitle: {app.subtitle}</p>
        <p>Birth Year: {getYear(app.year)}</p>
        
   </div>
);

function getYear2(year){
    if(year){
        //if year exists create a JSX expression else dont
        return <p>Year of birth:{year}</p>; 
    }else{
       return undefined; //even if you dont have this undefined will be returned inplicitly
    }
 }

const template5 = (
    <div>
        <h1>Project Title: {app.title}</h1>
        <p>Subtitle: {app.subtitle}</p>
      
        {getYear2(app.year)}
   </div>
);

//using ternary operator
const template5_1 = (
    <div>
        <h1>Project Title: {app.title ? app.title : 'no title given'}</h1>
        <p>Subtitle: {app.subtitle}</p>
         {getYear2(app.year)}
   </div>
);


//using logical AND operator
const template6 = (
    <div>
        <h1>Project Title: {app.title ? app.title : 'no title given'}</h1>
        <p>Subtitle: {app.subtitle}</p>
        {app.age>18 && <p>My Age: {app.age}</p>}
        {getYear2(app.year)}
   </div>
);

//challenge
//render subtitle(and p tag) only if it exists, use logical AND operator also check for its existence
//render new p tag- if options length is greater than 0, otherwise print 'no options' also check for options existence
 
const template7 = (
    <div>
        <h1>Project Title: {app.title ? app.title : 'no title given'}</h1>
        {app.subtitle &&  <p>Subtitle: {app.subtitle}</p>}
       { /*
         commenting in JSX,
         Another solution if you dont want to print options value
         <p>{app.options && app.options.length>0 ? 'options are present' : 'No options present! ..... or length could be zero'}</p>
         */
       }
        {app.options && app.options.length>0 ? <p>Here are the options: {app.options}</p> : <p>No options!</p>}
        {app.age>18 && <p>My Age: {app.age}</p>}
        {getYear2(app.year)}
        
   </div>
);



//...........................TIP: only one kind of comments inside JSX expression/templates works, {/* A JSX comment */}. Null, undefined and booleans values are all ignored in JSX and not printed in html file


//Forms and input
const app2={
    name:'Indecision App',
    options:[]
    
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    
    const option=e.target.elements.option.value;//fetch value give in input name 'option' ans store it in variable option
    if(option){
        app2.options.push(option); //push the value into 
        e.target.elements.option.value='';//emptying the input box
        
        renderingTemp();//re rendering after pushing into app2.options
    }
};

function wipeAll(){
    app2.options=[];
    renderingTemp();//re rendering after wiping out app2.options
}

function onMakeDecision(){
    const randomNum=Math.floor(Math.random() * app2.options.length);//math.random generate between 0 and 1, multiplying with array length gives random number between 0 and array length
   //console.log(randomNum);
    const selectedOption=app2.options[randomNum];
    alert(selectedOption);
}

const appRoot=document.getElementById('app');


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

let visibility=false;

const toggleTrueFalse = () =>{
   visibility = visibility ? false : true;
    // or simply visibility=!visibility;
    console.log(visibility);
    renderVisibility();
}

const renderVisibility = () => {
   
    const template9 = (
    <div>
        <h1>Visibility Toggle</h1>
         <button onClick={toggleTrueFalse}>{visibility ? 'Hide Details' : 'Show Details'}</button>
        { /* visibility ? <p>im showed up</p> : '' */  /* using ternary operator, here display p tag if true else empty, two parameters involved*/
        
          /* or use below logical AND, here it always expects first value to be true and then checks for second, else ignore it, hence only one check is done and then the display is done */
        } 
        
        
    { visibility && (
        <div>
            <p>hey there you will see me</p>
        </div>
      )
    }
         
   </div>
);
    
  ReactDOM.render(template9, appRoot);   
    
}





   

renderVisibility();