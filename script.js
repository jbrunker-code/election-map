function makePolitician(name, partyColor){

  var politician = {
  name: name,
  electionResults: null,
  totalVotes: 0,
  partyColor: partyColor,
  tallyVotes: function(){
    this.totalVotes = 0;
    for (let i = 0; i < this.electionResults.length; i++){
      this.totalVotes += this.electionResults[i];
    }
  }
  };

  return politician;
}/* makes politician factory function with party color, name, and method to tally votes  */

let aoc = makePolitician("AOC", [132, 17, 11]);
let bernie = makePolitician("Bernie", [245, 141, 136]);

/*creates my 2 politicians */

aoc.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
bernie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

/*gives them results*/

aoc.electionResults[9] = 1;
bernie.electionResults[9] = 28;
aoc.electionResults[4] = 17;
bernie.electionResults[4] = 38;
aoc.electionResults[43] = 11;
bernie.electionResults[43] = 27;

/*updates the results*/

aoc.tallyVotes();
bernie.tallyVotes();

/* calls the vote tally function based on current results, updates total votes for each politician */

let overallWinner = "";
if (aoc.totalVotes < bernie.totalVotes){
  overallWinner = "AOC";
}
if (aoc.totalVotes < bernie.totalVotes){
  overallWinner = "Bernie"
}
else {
  overallWinner = "Draw"
}

/* assigns overall winner variable based on updated vote totals*/

function setStateResults (state) {
  theStates[state].winner = null;
  if (aoc.electionResults[state] > bernie.electionResults[state]){
    theStates[state].winner = aoc;
  } else if (aoc.electionResults[state] < bernie.electionResults[state]){
    theStates[state].winner = bernie;
  }

  let stateWinner = theStates[state].winner;
  if (stateWinner){
    theStates[state].rgbColor = stateWinner.partyColor
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  };

  let stateInfoTable = document.getElementById("stateResults");
  let header = stateInfoTable.children[0];
  let body = stateInfoTable.children[1];
  let stateName = header.children[0].children[0];
  let stateAbbrev = header.children[0].children[1];
  let aocName = body.children[0].children[0];
  let aocResults = body.children[0].children[1];
  let bernieName = body.children[1].children[0];
  let bernieResults = body.children[1].children[1];
  let winnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
  aocName.innerText = aoc.name;
  aocResults.innerText = aoc.electionResults[state];
  bernieName.innerText = bernie.name;
  bernieResults.innerText = bernie.electionResults[state];

  if (theStates[state].winner === null){
    winnerName.innerText = "DRAW"
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
};

/*creates function that determines state winner and changes color of state based on winner,
  should also populate state table info for each state*/

let countryInfoTable = document.getElementById("countryResults");
let row = countryInfoTable.children[0].children[0];

row.children[0].innerText = aoc.name;
row.children[1].innerText = aoc.totalVotes;
row.children[2].innerText = bernie.name;
row.children[3].innerText = bernie.totalVotes;
row.children[5].innerText = overallWinner;

/* populates top table with Overall Winner info */
