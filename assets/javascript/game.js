let teamoneshootbutton = document.querySelector("#teamone-shoot-button");
let resetbutton = document.querySelector("#reset-button");
let teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");

const teamonenumshots = document.querySelector("#teamone-numshots");
const numresets = document.querySelector("#num-resets");
const teamtwonumshots = document.querySelector("#teamtwo-numshots");

let teamoneshotstaken = 0;
let teamtwoshotstaken = 0;
let shotsreset = 0;

teamoneshootbutton.addEventListener("click", function () {
  teamoneshotstaken = teamoneshotstaken + 1;
  teamonenumshots.innerHTML = teamoneshotstaken;
  if (Math.random() * 100 > 50) {
    console.log("Goals!");
    const teamonenumgoals = document.querySelector("#teamone-numgoals");
    teamonenumgoals.innerHTML;
  }
});

teamtwoshootbutton.addEventListener("click", function () {
  teamtwoshotstaken = teamtwoshotstaken + 1;
  teamtwonumshots.innerHTML = teamtwoshotstaken;
  if (Math.random() * 100 > 50) {
    console.log("Goals!");
  }
});

resetbutton.addEventListener("click", function () {
  shotsreset = shotsreset + 1;
  numresets.innerHTML = shotsreset;

  teamoneshotstaken = 0;
  teamtwoshotstaken = 0;

  teamtwonumshots.innerHTML = teamtwoshotstaken;
  teamonenumshots.innerHTML = teamoneshotstaken;
});
