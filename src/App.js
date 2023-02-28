import React, { Component }  from 'react';
// the code in this creates a component. 
// a component is a piecwe of reasuable code that 
// represents a part of a user interface
// Components are used to render, manage, and update
// the UI elements in your application. 


//calling square, the export 
// JavaScript keyboard makes this function accessible outside
// of this file. 
// the default keyword tells other files using your code that 
// it's the main function in your file 


function Square({ value }){
  return <button className="square">{value}</button>;
}
export default function Board() {
  return(
    <React.Fragment>
      <div className="board-row">
        <Square value="1" /> 
        <Square value="2" /> 
        <Square value="3" /> 
      </div>
      <div className="board-row">
        <Square value="4"/> 
        <Square value="5" /> 
        <Square value="6"/> 
      </div>
      <div className="board-row">
        <Square value="7"/> 
        <Square value="8" /> 
        <Square value="9"/> 
      </div>
    </React.Fragment>
  );

}
//then it reutrns a button
//the return JavaScript keyword means whatever comes after is returned
// as a value to the caller of the function
// button is a JSX element
// A JSX element is a combination of JavaScript code and HTML tags
// that describes what you'd like to display. 

//className = "square" is a button property or prop 
// to tells CSS how to style the button 

// X is the text displayed inside of the button and </button>
// closes the JSX elements to indicate that any following content
// shouldn't be placed inside the button.
