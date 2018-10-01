'use strict';
/*eslint-env jquery*/

const app = (function(){
  let index = 0; 

  function generateCell(){ 
    index++;  
    
    console.log(index);
    return `  
    <div class="cell" id="${index-10}">
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
    $('.board').html(gameBoardString); 
  }

  function handleOnGameStartClick(){
    $('#new-game').on('click', function(){ 
      console.log('clicked start button');
    }); 
    render(); 
  }
  function handleOnCellClick(){
    $('.game').on('click', '.cell',  function(event){ 

      const val = $(event.currentTarget).attr('id'); 
      console.log(val);
      //console.log('clicked cell');
    }); 
  }

  function bindEventListeners(){
    handleOnGameStartClick(); 
    handleOnCellClick(); 
  }

  return {render, bindEventListeners}; 
}()); 

$(document).ready(function(){ 
  app.bindEventListeners(); 
  app.render(); 
}); 

// State modification functions

// Render functions

// Event Listeners
