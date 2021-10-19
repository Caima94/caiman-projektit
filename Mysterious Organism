// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, arr) => {
  let newObj = {
    specimenNum: number,
    dna: arr,
    mutate () {
      const randomBase = Math.floor(Math.random() * this.dna.length);
      let mutatedBase = returnRandBase();
      while (this.dna[randomBase] === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      this.dna[randomBase] = mutatedBase;
      this.dna;
      },
    compareDNA (Objparam) {
      let sameBaseCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === Objparam.dna[i]) {
          sameBaseCounter++;
          //console.log(this.dna[i]);
          //console.log(Objparam.dna[i]);
        }
      }
      //console.log(this.dna);
      //console.log(Objparam.dna);
      //console.log(sameBaseCounter); 
      console.log(`pAequor ${this.specimenNum} and pAequor ${Objparam.specimenNum} have ${sameBaseCounter / 15 * 100}% DNA in common.`);
    },
    willLikelySurvive() {
      let survivalCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivalCounter++;
        }
      }
      if (survivalCounter >= 9) {
        return true;
      } else {
        return false;
      }
    }
    }
    return newObj;
  }

let testObj1= pAequorFactory(1, mockUpStrand());
let testObj2= pAequorFactory(2, mockUpStrand());
let testObj3= pAequorFactory(3, mockUpStrand());
let testObj4= pAequorFactory(4, mockUpStrand());
let testObj5= pAequorFactory(5, mockUpStrand());
let testObj6= pAequorFactory(6, mockUpStrand());
let testObj7= pAequorFactory(7, mockUpStrand());
let testObj8= pAequorFactory(8, mockUpStrand());
let testObj9= pAequorFactory(9, mockUpStrand());
let testObj10= pAequorFactory(10, mockUpStrand());
console.log(testObj2.willLikelySurvive());
console.log(testObj2.dna);
