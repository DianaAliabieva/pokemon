const JohnemonArena = require("./JohnemonArena");
const Johnemon = require("./Johnemon");
const rl = require("./Readline");

const arena = new JohnemonArena();

class JohnemonWorld {
  constructor() {
    (this.day = 0), (this.logs = []);
  }

  oneDayPasses() {
    this.day += 1;
    console.log(`One day has passed!`);
    this.randomizeEvent();
  }

  randomizeEvent() {
    const randomEvent = Math.floor(Math.random() * 2);
    switch (randomEvent) {
      case 0:
        console.log(`Nothing happens today, the day passes.`);
        this.oneDayPasses();
        break;
      case 1:
        console.log(`A wild Johnemon™ appears!`);
        this.askForFight();
        break;

      default:
        console.log(`Error`);

        break;
    }
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
        oneDayPasses();
        return;
      } 
      console.log(`Battle has started!`);
      arena.startBattle();
      return;
    });
  }
  addLog(newLog) {}
}

module.exports = JohnemonWorld;
