
class JohnemonMaster {
  constructor(name) {
    this.name = name;
    this.johnemonCollection = [];
    this.healingItems = 5; // Initial number of healing items
    this.reviveItems = 3; // Initial number of revive items
    this.JOHNEBALLS = 10; // Initial number of JOHNEBALLS
  }

  renameJohnemon(johnemon) {
    const indexJohnemon = this.johnemonCollection.indexOf(johnemon);
    if (indexJohnemon > -1) {
      //when there is nothing, it returns -1
      this.johnemonCollection[indexJohnemon].name = johnemon;
      console.log(`The new name is: ${johnemon}`);
    } else {
      console.log(`This Johnemon doesn't exist`);
    }
  }

  healJohnemon(johnemon) {
    // defender.healthPool  === healthPool
  }

  reviveJohnemon(johnemon) {
    //
  }

  releaseJohnemon(johnemon) {
    const indexJohnemon = this.johnemonCollection.indexOf(johnemon);
    if (indexJohnemon > -1) {
      //when there is nothing, it returns -1
      this.johnemonCollection.splice(indexJohnemon, 1);
      console.log(`The ${johnemon} has been removed`);
    } else {
      console.log(`This Johnemon doesn't exist`);
    }
  }

  catchJohnemon(johnemon) {
    this.johnemonCollection.push(johnemon);

    if (this.JOHNEBALLS > 0) {
      this.JOHNEBALLS -= 1;
      console.log(
        `The ${johnemon} is catched, now you have ${this.JOHNEBALLS} johneballs.`
      );
    } else {
      console.log(`You have ${this.JOHNEBALLS} johneballs.`);
    }
  }
  showCollection() {
    this.johnemonCollection.forEach((johnemon, index) => {
      console.log(`Here is your collection:
                 ${johnemon.name}`);
    });
  }
}

module.exports = JohnemonMaster
