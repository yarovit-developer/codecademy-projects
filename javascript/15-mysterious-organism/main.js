// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const cgBases = this.dna.filter(base => base === 'C' || base === 'G').length;
      const cgRatio = cgBases / this.dna.length;
      return cgRatio >= 0.6;
    }
  };
};

// Create an array to store 30 pAequor instances
const pAequorInstances = [];

// Create 30 pAequor instances
for (let i = 1; i <= 30; i++) {
  const specimen = pAequorFactory(i, mockUpStrand());
  // Проверка, выживет ли экземпляр в своей естественной среде
  if (specimen.willLikelySurvive()) {
    pAequorInstances.push(specimen);
  }
}

// Output pAequor instances that can survive in their natural environment
console.log(pAequorInstances);

