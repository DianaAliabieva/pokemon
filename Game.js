const JohnemonMaster = require('./JohnemonMaster'); // Replace 'your_classes_filename' with the actual filename
const Johnemon = require('./Johnemon')
const JohnemonWorld = require ('./JohnemonWorld')
const fs = require('fs');
const rl = require('./Readline');


const player = new JohnemonMaster() ;
const world = new JohnemonWorld();

function saveGameState(){
  
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
    console.log(`${player.name}, you have received ${johnemons[chosenNumber].name}`);
    player.johnemonCollection.push(johnemons[chosenNumber]);
  })
  
  

}

function startGame(){
  rl.question(`Welcome, ${askForName()}`, (answer)=>{
  player.name = answer;
  console.log( `Hello, ${answer}! Let your Johnemon adventure begin!`);
  proposeFirstJohnemon(rl);
  
  })
}




startGame()


