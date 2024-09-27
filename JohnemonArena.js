
//JohnemonArena.js
const rl = require('./Readline.js');
const JohnemonWorld = require ('./JohnemonWorld.js');
const JohnemonMaster = require('./JohnemonMaster.js'); 
const Johnemon = require('./Johnemon.js');
const data = require('./save.json');
const { log } = require('console');




class JohnemonArena {
  constructor(johnemon_1, johnemon_2, player) {
    this.johnemon_1 = johnemon_1;
    this.johnemon_2 = johnemon_2;
    this.player = player

  }

  startBattle(poke1, poke2) {
    console.log("HERE are  !! ",poke1, poke2);
    
  }
  
  chooseJohnemon() {
    const playerChoise = this.player.johnemonCollection[chosenNumber];
  }

  startRound(selectedJohnemon) {
    
  	
    
  }

  playerAction(selectedJohnemon) {
  	
  }

  attack(selectedJohnemon) {
    
  }

  tryToCatch() {
    

  }

  calculateDamage(attackRange, defenseRange) {
    
  }

  wildJohnemonAction() {
    
  }

  checkBattleStatus() {
    
  }

  startNewRound() {
    
  }

  endBattle() {
    
  }
}

module.exports = JohnemonArena