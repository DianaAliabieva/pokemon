//JohnemonMaster


class JohnemonMaster {
  constructor(name, johnemonCollection, healingItems, reviveItems, JOHNEBALLS, player) {
    //the values that are already exicting = ...
    this.name = name;
    this.johnemonCollection = johnemonCollection || [];
    this.healingItems = healingItems ||5; // Initial number of healing items
    this.reviveItems = reviveItems || 3; // Initial number of revive items
    this.JOHNEBALLS =  JOHNEBALLS || 10; // Initial number of JOHNEBALLS
    this.player = player;
  }

  renameJohnemon(johnemon) {
    const indexJohnemon = this.johnemonCollection.indexOf(johnemon);
    if (indexJohnemon > -1) {
      //when there is nothing, it returns -1
      this.johnemonCollection[indexJohnemon].name = johnemon.randomName();
      console.log(`The new name is: ${johnemon.name}`);
    } else {
      console.log(`This Johnemon doesn't exist`);
    }
  }

  healJohnemon(johnemon) {

    if (this.healingItems > 0 ) {
      
      console.log(johnemon.name)
      johnemon.currentHealth = johnemon.healthPool

      this.healingItems--;
      console.log(`${this.name} healed ${johnemon.name}! Health restored to ${johnemon.healthPool}. Remaining healing items: ${this.healingItems}`);
    } else {
      console.log(`${this.name} is out of healing items!`);
    }
    
  }

  reviveJohnemon(johnemon) {

    if (this.reviveItems > 0) {
      johnemon.currentHealth = johnemon.healthPool
      this.reviveItems--;
      console.log(`${this.name} revived ${johnemon.name}! Health restored to ${johnemon.healthPool}. Remaining revive items: ${this.reviveItems}`);
    } else {
      console.log(`${this.name} is out of revive items!`);
    }
  }

  releaseJohnemon(johnemon) {

    const indexJohnemon = this.johnemonCollection.indexOf(johnemon);
    if (indexJohnemon > -1) {
      //when there is nothing, it returns -1
      this.johnemonCollection.splice(indexJohnemon, 1);
      console.log(`The ${johnemon.name} has been removed`);
    } else {
      console.log(`This Johnemon doesn't exist`);
    }
  }

  catchJohnemon(johnemon) {
    this.johnemonCollection.push(johnemon);

    if (this.JOHNEBALLS > 0) {
      this.JOHNEBALLS -= 1;
      console.log(
        `The ${johnemon.name} is catched, now you have ${this.JOHNEBALLS} johneballs.`
      );
    } else {
      console.log(`You have ${this.JOHNEBALLS} johneballs.`);
    }
  }

  showCollection() {
    if (this.johnemonCollection.length >0 ){

      this.johnemonCollection.forEach((johnemon, index) => {
        
        console.log(`Here is your collection:
          
          ${index+1}. ${johnemon.name}
          
          `);
        });
      } else{
        console.log(`Your collection is empty`);
      
        //bug - if an empty collection, so i do what? rien
      }
  }
}

module.exports = JohnemonMaster
//it is an export 