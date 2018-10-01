'use strict';
/*eslint-env jquery*/

const app = (function(){
  function generateCell(index){ 
    return `  
    <div class="cell" id="${index}">
        <p>&nbsp;</p>
    </div>`; 
  }
  function generateRow(){
    let rowLength = 3; 
    let row = []; 
    row.push(' <div class="row">'); 
    for (let i = 0; i < rowLength; i++){ 
      row.push(generateCell(i)); 
    }
    row.push('</div>'); 
    return row.join(' '); 
  } 

  function generateBoard(){ 
    let numRows = 3; 
    let board = []; 
    for (let i = 0; i < numRows; i++){ 
      board.push(generateRow()); 
    }
    return board; 
  }

  function render(){
    const gameBoardString = generateBoard(); 
    // console.log(gameBoardString); 
    $('.board').html(gameBoardString); 
  }

  function handleOnGameStartClick(){
    render(); 
  }
  function handleOnCellClick(){}

  function bindEventListeners(){
    handleOnCellClick(); 
    handleOnGameStartClick(); 
  }

  return {render, bindEventListeners}; 
}()); 
app.render(); 

// State modification functions

// Render functions

// Event Listeners
