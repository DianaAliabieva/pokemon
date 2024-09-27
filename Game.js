//Game.js

const Johnemon = require('./Johnemon')
const JohnemonMaster =  require('./JohnemonMaster'); 
//import 
const JohnemonWorld = require ('./JohnemonWorld');
const JohnemonArena = require('./JohnemonArena');
const fs = require('fs');
const rl = require('./Readline');


const player = new JohnemonMaster();
const world = new JohnemonWorld(player);
const arena = new JohnemonArena();





function saveGameState(){
  fs.writeFileSync("save.json", JSON.stringify(player, null, 2)); console.log("Game saved");
}

function askForName() {
  return "What is your name, Johnemon Master?" 
}

function proposeFirstJohnemon(rl){
  const johnemons = [
    new Johnemon(),
    new Johnemon(),
    new Johnemon()
  ];
  //const[ johnemon1, johnemon2, johnemon3] = johnemons;
  johnemons.forEach((johnemon, index)=> {
    console.log(`Johnemon ${index+1}: Name: ${johnemon.name}, Level: ${johnemon.level},
       Attack Range: ${johnemon.attackRange}, Defense Range: ${johnemon.defenseRange}, Health Pool; ${johnemon.healthPool} `);
  });

  rl.question(`Choose your first Johnemon?(1-3)` ,(answer) =>{
    let chosenNumber = parseInt(answer) - 1;
    console.log(chosenNumber)
    console.log(`-----------------------------------
      ${player.name}, you have received ${johnemons[chosenNumber].name}
----------------------------`);
    player.johnemonCollection.push(johnemons[chosenNumber]);
    player.showCollection();
    saveGameState();
    world.oneDayPasses();
    
  })
}

function startGame(){
  rl.question(`Welcome, ${askForName()}`, (answer)=>{
  player.name = answer;
  console.log( `Hello, ${answer}! Let your Johnemon adventure begin!`);
  proposeFirstJohnemon(rl);
  
  })
}


// function arenafight() {
//   console.log(`works`);
  
//   player.showCollection();
//   rl.question(`Choose your first pokemon to fight`, (answer) => {
//     let chosenNumber = parseInt(answer) - 1;
//     const playerChoise = player.johnemonCollection[chosenNumber];
//     console.log(`you have chosen ${playerChoise}`);
//   });

//   const opponent = new Johnemon();
//   console.log(`you have ${opponent} and ${playerChoise}`);

//   arena.startBattle(playerChoise, opponent);
// }

startGame();




