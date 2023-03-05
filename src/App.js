import React, { Component }  from 'react';
import { useState } from 'react';
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

// this the Square component that recieves the value prop
// from the Board component
// This will require removing the Square component's own stateful tracking of value and the button's
// onClick pop
function Square({ value, onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>

  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // this creates an array with nine elements and sets each of them to null 
  // useState() call arount it declares squares state variable that's initially set to the array
  //Each entry in the array corresponds to the value of a square

  //Defining the handleClick function inside the Board component to update the squares
  // array holding the boards state 

  // This fuction creates a copy of the squares array (nextSquares) with the JavaScript slice()
  // Array method. Then, handClick updates the nextSquare array to add X to the first ([0] index)
  // square. 

  // Calling the setSquares function lets React know the state of the component has changed. This 
  // will trigger a rerender of the components that use the squares state (Board) as well as its child
  // components (the square components that make up the board).
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X"; 
    setSquares(nextSquares);
  }


  return(
    <React.Fragment>
      <div className="board-row">
        <Square value = {squares[0]} onSquareClick={() => handleClick(0)} /> 
        <Square value = {squares[1]} onSquareClick={() => handleClick(1)}  /> 
        <Square value = {squares[2]} onSquareClick={() => handleClick(2)} /> 
      </div>
      <div className="board-row">
        <Square value = {squares[3]} onSquareClick={() => handleClick(3)} /> 
        <Square value = {squares[4]} onSquareClick={() => handleClick(4)} /> 
        <Square value = {squares[5]} onSquareClick={() => handleClick(5)} /> 
      </div>
      <div className="board-row">
        <Square value = {squares[6]} onSquareClick={() => handleClick(6)} /> 
        <Square value = {squares[7]} onSquareClick={() => handleClick(7)} /> 
        <Square value = {squares[8]} onSquareClick={() => handleClick(8)} /> 
      </div>
    </React.Fragment>
      // the () => syntax here is an arrow function, which a shorthand for defining functions
      // when the square is clicked, the code after the arrow will run, calling handClick(0)
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


// To collect data from multiple children, or to have two children componnet
// communicate with each other, declare the shared state in the parent component instead 
// The parent component can pass that state back down to the children via props. This keeps
// the child component in sync with each other and with the parent component
// In this case the parent component is the board, and the children component is the squares 


// The state handling is in the Board component, 
// the parent Board component passes props to the child Square components 
// so that they can be displayed correctly. When clicking on a Square, the child
// Square component now asks the parent Board component to update the state of the board. 
// When the Board's state changes, both the Board component and every child Square
// component re-renders automatically. Keeping the state of all squares in the Board component
// will allow it to determmine the winner in the future. 


//When a user clickes on the top left square on the board to add an X to it:
// 1. Clicking on the upper left square runs the function that the button recieved as its onCLick
// prop from the Square. The Square component received that function as its onSquareClick prop from
// the Board. The Board component defined that function directly in the JSX. It calls handleClick with an argument of 0.
// handleClick uses the argument(0) to update the first element of the squares array from null to X
// The squares state of the Board component was updated, so the Board and all of its children re-render. This 
// causses the value prop of the Square Component with index 0 to change from null to X


// Immutability is important
// The first approach is to mutate the data by directly changing the data's values. 
// The second approach is to replace the data with a new copy which has the desired changes. 

// By not mutating directly, there are several benefits:
// Immutability makes complex features much easier to implement. 
// Avoiding direct data mutation lets you keep previous versions of the data intact, and 
// reuse them (or reset to them) later. 

// Another benefit of immtability. By default, all child components re-render automatically 
// when the state of a parent component changes. This inclused even the child components that
// weren't affected by the change. Although, re-rendering is not by itself noticebable to use the user. 