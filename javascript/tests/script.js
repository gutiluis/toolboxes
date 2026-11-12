let playerName = "goku";

debugger;

localStorage.setItem("playerName", playerName);

let storedPlayerName = localStorage.getItem("playerName");
console.log(storedPlayerName);
