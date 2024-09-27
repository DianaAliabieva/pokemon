//JohnemonWorld.js
const JohnemonArena = require("./JohnemonArena");
const Johnemon = require("./Johnemon");
const rl = require("./Readline");

const game = require("./Game.js");

class JohnemonWorld {
  constructor(player) {
    this.day = 1, 
    this.logs = [],
    this.player = player
  }

  oneDayPasses() {
    this.day += 1;
    this.addLog('A new day has started in the Johnemon™ World!');
    console.log(`Day ${this.day}: A new day begins in the Johnemon™ World!`);
    this.promptUserAction();

    // this.randomizeEvent();
  }

  randomizeEvent() {
    const randomEvent = Math.floor(Math.random() * 2);
    switch (randomEvent) {
      case 0:
        console.log(`Nothing happens today, the day passes.`);
        this.oneDayPasses();
        break;
      case 1:
        
        console.log(`A wild Johnemon™ appears!
           `);
        
        this.askForFight();
        break;

      default:
        console.log(`Error`);

        break;
    }
  }

  arenafight() {
    this.player.showCollection();

    rl.question(`Choose your first pokemon to fight: `, (answer) => {
      let chosenNumber = parseInt(answer) - 1;
      let playerChoise =  this.player.johnemonCollection[chosenNumber];
      console.log(`You have chosen ${playerChoise.name}`);
      const opponent = new Johnemon();
      console.log(`Your opponent:  ${opponent.name} and your johnemon: ${playerChoise.name}`);

    });

  }

  askForFight() {
    rl.question("Do you want to fight?", (answer) => {
      if (!["y", "n"].includes(answer)) {
        console.log("Invalid answer");
        this.askForFight();
        return;
      }
      if (answer === "n") {
        console.log(`No fight today, see you tomorrow `);
        this.oneDayPasses();
        return;
      }
      console.log(`Battle has started!`);
      this.arenafight();
    });
  }
  addLog(newLog) {
// const logEntry = `Day ${this.day}: ${newLog}`;
//     this.logs.push(logEntry);
//     console.log(logEntry);
      // Also display it in the console
  }




promptUserAction() {
  const options = `
  What would you like to do today?
  1. Heal Johnemon
  2. Revive Johnemon™
  3. Release Johnemon™
  4. Rename Johnemon™
  5. Do nothing
  Choose an option (1-4): `;

  rl.question(options, (answer) => {
    switch (answer) {
      case '1':
        this.player.showCollection();
        rl.question(`Which one you chose?`, (answer)=>{
          let chosenNumber = parseInt(answer) - 1;
          
          

          this.player.healJohnemon(this.player.johnemonCollection[chosenNumber]);
          
          this.randomizeEvent();
        })
        break;



      case '2':
        let deadJohnemons = []; // To store dead Johnemons
        this.player.johnemonCollection.forEach(johnemon => {
          if (johnemon.currentHealth <= 0) {
            deadJohnemons.push(johnemon); // Add dead johnemon to the new array
          }
        });
        
        // Check if there are dead johnemons and show the result in console
        if (deadJohnemons.length > 0) {
         
          deadJohnemons.forEach((johnemon, index) => {
            console.log(`Here is your dead collection:
      
                      ${index+1}. ${johnemon.name}
                      
                      `);
          });
          
          rl.question(`Which one do you want to revive?`, (answer)=>{
            let chosenNumber = parseInt(answer) - 1;
            
            let chosenJohnemon = deadJohnemons[chosenNumber];
            this.player.reviveJohnemon(chosenJohnemon);
            this.randomizeEvent();
          })
        } else {
          console.log('No Johnemons to revive');
          this.randomizeEvent();
        }  
      
        break;
      case '3':
        this.player.showCollection();
        
        rl.question(`Which one you chose?`, (answer)=>{
          let chosenNumber = parseInt(answer) - 1;
                
          this.player.releaseJohnemon(this.player.johnemonCollection[chosenNumber]);
          
          this.randomizeEvent();
        })


        
        break;
      case '4':
        this.player.showCollection();
        rl.question(`Which one you chose?`, (answer)=>{
          let chosenNumber = parseInt(answer) - 1;
          this.player.renameJohnemon(this.player.johnemonCollection[chosenNumber]);
          this.randomizeEvent();
        })

       
        break;
        case '5':
          this.randomizeEvent()
        
        break;
      default:
        console.log("Invalid choice, please select a valid option (1-4).");
        this.promptUserAction();
        break;
      }
    });
  }
}












module.exports = JohnemonWorld;
