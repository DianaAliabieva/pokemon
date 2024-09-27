const students = [
'Oli', 'via',
'No', 'ra',
'Di', 'ana',
'Mo', 'hab',
'Ly', 'ne',
'Ja', 'son',
'Sébas', 'tien',
'Cris', 'telle',
'Fa', 'rid',
'Ju', 'lien',
'Edou', 'ard',
'Mb', 'ogle',
'Ben', 'jamin',
'Mat', 'teo',
'Re', 'da',
'Dona', 'tien',
'Re', 'naud',
'Ant', 'oine',
'Nahi', 'mana',
'Sté', 'phen',
'Mo', 'hamed',
'Ha', 'kim',
'Pie', 'rre',
'Hu', 'go',
'Thé', 'o',
'Max', 'ime'
]

// my code
class Johnemon {
  constructor(){
    this.name = this.randomName(), 
    this.level = 1,
    this.experienceMeter = 0,
    this.attackRange = this.randomNumber(1, 8),
    this.defenseRange = this.randomNumber(1, 3),
    this.healthPool =this.randomNumber(10, 30),
    this.catchPhrase = this.randomPhrase(),
    this.currentHealth = this.healthPool;
    
  }
            
    randomName(){
      const randomStudent1 = students[Math.floor(Math.random()*students.length)].toLowerCase();
      const randomStudent2 = students[Math.floor(Math.random()*students.length)].toLowerCase();
      return `${randomStudent1}${randomStudent2}`;
    }

    randomNumber(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomPhrase(){
      const randomPhrases = ["I am so powerfull", "I need to sleep", "Can you be my friend", "Let's figth outside", "I don't want", "QUOI???"]
      return randomPhrases[Math.floor(Math.random()*randomPhrases.length)];
    }

    attack(defender){
      const damage =this.randomNumber(this.attackRange * this.level, this.attackRange) - defender.defenseRange;
      defender.healthPool -= damage;
      console.log(`${this.name} attacked ${defender.name} and dealt ${damage} damage!`);
    }

    gainExperience(opponentLevel) {
      const experienceGain = this.getRandomNumber(1, 5) * opponentLevel;
      this.experienceMeter += experienceGain;
      console.log(`${this.name} gained ${experienceGain} experience points!`);
      if (this.experienceMeter >= this.level * 100) {
        this.evolve();
      }
    }
  
    evolve() {
      this.level += 1;
      const attackIncrease = this.randomNumber(1, 5);
      const defenseIncrease = this.randomNumber(1, 5);
      const healthIncrease = this.randomNumber(1, 5);
  
      this.attackRange += attackIncrease;
      this.defenseRange += defenseIncrease;
      this.healthPool += healthIncrease;
  
      console.log(`${this.name} evolved into a higher level! New stats: Level ${this.level}, Attack Range ${this.attackRange}, Defense Range ${this.defenseRange}, Health Pool ${this.healthPool}`);
    }
  
    sayCatchPhrase() {
      console.log(`${this.name} says: "${this.catchPhrase}"`);
    }
}

module.exports = Johnemon ;
