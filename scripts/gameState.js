'use strict';

/* global cuid */
const GAMESTATE = (function(){ 
  const moves = [ {id: cuid(), value: 'x', location:[2, 3] }]; 
  
  const setMove = function(id, value, location){ 
    this.moves.push({id, value, location}); 
    this.listMoves();   
  }; 

  const startGame = function(){ 
    moves.length = 0; 
  }; 

  const listMoves = function(){ 
    this.moves.forEach(element => {
      // eslint-disable-next-line no-console
      console.log(element);
    });
  }; 

  return {moves, setMove, startGame, listMoves}; 
}()); 

// eslint-disable-next-line no-console
// console.log(GAMESTATE.moves); 

// GAMESTATE.startGame(); 

// // eslint-disable-next-line no-console
// console.log(GAMESTATE.moves);