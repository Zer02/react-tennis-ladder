// src/App.js
import React, { useState } from "react";
import Player from "./components/Player";
import { simulateSeason } from "./utils/simulation";
import generateRandomPlayers from "./utils/generateRandomPlayers";
import "./styles.css";

const App = () => {
  const [players, setPlayers] = useState(generateRandomPlayers());

  const simulateWeek = () => {
    // Simulate one additional match for each player
    simulateSeason(players, 1, 32); // Adjust the kFactor and number of matches as needed

    // Sort players based on ELO ratings in descending order
    const sortedPlayers = [...players].sort((a, b) => b.rating - a.rating);

    // Update App data with the sorted players array
    setPlayers(sortedPlayers);
  };

  const updateRanks = () => {
    // Implement the ranking logic here
    // Update the state accordingly
  };

  return (
    <div>
      <h1>Tennis Ranked Ladder</h1>
      <button onClick={simulateWeek}>Simulate Week</button>
      <button onClick={updateRanks}>Update Ranks</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ELO</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
