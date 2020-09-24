let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let resetbutton = document.querySelector("#reset-button");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");

const teamonenumshots = document.querySelector("#teamone-numshots");
const numresets = document.querySelector("#num-resets");
const teamtwonumshots = document.querySelector("#teamtwo-numshots");
const teamOneNumGoals = document.querySelector("#teamone-numgoals");
const teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");

let teamoneshotstaken = 0;
let teamtwoshotstaken = 0;
let shotsreset = 0;
let firstTeamGoals = 0;
let secondTeamGoals = 0;

teamoneshootbutton.addEventListener("click", function () {
  teamoneshotstaken = teamoneshotstaken + 1;
  teamonenumshots.innerHTML = teamoneshotstaken;
  if (Math.random() * 100 > 50) {
    console.log("Goals!");
    firstTeamGoals = firstTeamGoals + 1;
    teamOneNumGoals.innerHTML = firstTeamGoals;
  }
});

teamtwoshootbutton.addEventListener("click", function () {
  teamtwoshotstaken = teamtwoshotstaken + 1;
  teamtwonumshots.innerHTML = teamtwoshotstaken;
  if (Math.random() * 100 > 50) {
    console.log("Goals!");
    secondTeamGoals = secondTeamGoals + 1;
    teamTwoNumGoals.innerHTML = secondTeamGoals;
  }
});

resetbutton.addEventListener("click", function () {
  shotsreset = shotsreset + 1;
  numresets.innerHTML = shotsreset;

  teamOneNumGoals.innerHTML = firstTeamGoals;

  teamTwoNumGoals.innerHTML = secondTeamGoals;

  teamoneshotstaken = 0;
  teamtwoshotstaken = 0;
  firstTeamGoals = 0;
  secondTeamGoals = 0;

  teamtwonumshots.innerHTML = teamtwoshotstaken;
  teamonenumshots.innerHTML = teamoneshotstaken;
  teamOneNumGoals.innerHTML = firstTeamGoals;
  teamTwoNumGoals.innerHTML = secondTeamGoals;
});
