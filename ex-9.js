// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
let highestScoreName;
let highestScore=0;
let lowestScoreName
let lowestScore=100;
let sumScore=0;
let count = 0;
for(let name in studentsScore){
  if(studentsScore[name]>highestScore){
    highestScore=studentsScore[name];
    highestScoreName=name;
  }else if(studentsScore[name]<lowestScore){
    lowestScore=studentsScore[name];
    lowestScoreName=name;
  }else {

  }
  count++;
  sumScore=sumScore+studentsScore[name]
}
let averageScore=sumScore/count;
console.log(`Average score is ${averageScore}`)
console.log(`${highestScore} has the highest score, which is ${highestScoreName}`)
console.log(`${lowestScore} has the lowest score, which is ${lowestScoreName}`)

