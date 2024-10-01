 // Array to store player objects, each with firstName, lastName, and age
const team = {
  _players: [
    {
      firstName: "Roger",
      lastName: "Bishop",
      age: 23,
    },
    {
      firstName: "Katrina",
      lastName: "Alvarez",
      age: 25,
    },
    {
      firstName: "Nia",
      lastName: "Holmes",
      age: 20,
    },
  ],
   // Array to store game objects, each with opponent, teamPoints, and opponentPoints
  _games: [
    {
      opponent: "Jets",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Giants",
      teamPoints: 45,
      opponentPoints: 12,
    },
    {
      opponent: "Eagles",
      teamPoints: 31,
      opponentPoints: 15,
    },
  ],

  // Getter for the players array
  get players() {
    return this._players;
  },
 // Getter for the games array
  get games() {
    return this._games;
  },
  // Method to add a new player to the players array
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    }; 
    // Add the new player to the players array
    this.players.push(player);
  },
   // Method to add a new game to the games array
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    // Add the new game to the games array
    this.games.push(game);
  },
};
// Adding a new player (Bugs Bunny, 76 years old) to the team
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);// Output all players, including the new player
// Adding a new game result (Titans, 100 team points, 98 opponent points) to the games
team.addGame("Titans", 100, 98);
 // Output all games, including the new game
console.log(team.games);
