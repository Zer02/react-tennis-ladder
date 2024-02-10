// src/utils/simulation.js
import { calculateELO } from "./eloUtils";

export function simulateSeason(players, numGames, kFactor) {
  // Simulate season
  for (let game = 0; game < numGames; game++) {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    // Simulate each match in the season
    for (let i = 0; i < shuffledPlayers.length - 1; i += 2) {
      const player1 = shuffledPlayers[i];
      const player2 = shuffledPlayers[i + 1];

      // Simulate match outcome (assuming win, draw, or loss for simplicity)
      const outcome = Math.random() > 0.5 ? "win" : "loss";
      
      // Log match details
      console.log(
        `Match ${game + 1}: ${player1.name} vs. ${
          player2.name
        } - Outcome: ${outcome}`
      );

      // Update ELO ratings based on match outcome
      player1.rating = calculateELO(
        player1.rating,
        player2.rating,
        outcome,
        kFactor
      );
      player2.rating = calculateELO(
        player2.rating,
        player1.rating,
        outcome === "win" ? "loss" : outcome === "draw" ? "draw" : "win",
        kFactor
      );

      // Update other player properties based on match outcome
      updatePlayerStats(player1, outcome);
      updatePlayerStats(player2, outcome);
    }
  }

  // Logging the updated player statistics
  console.log("Updated Player Stats:", players);
}

function updatePlayerStats(player, outcome) {
  console.log("Updating Player Stats:", player, outcome);

  player.matchesPlayed += 1;

  if (outcome === "win") {
    player.wins = (player.wins || 0) + 1;
  } else if (outcome === "loss") {
    player.losses = (player.losses || 0) + 1;
  }

  // Logging the player statistics after the update
  console.log("Player Stats After Update:", player);
  // Update other stats or calculations as needed
}
