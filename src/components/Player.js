// src/components/Player.js
import React from "react";

const Player = ({ player }) => {
  const calculateWinPercentage = () => {
    const totalMatches = player.wins + player.losses;
    return totalMatches > 0
      ? ((player.wins / totalMatches) * 100).toFixed(2)
      : 0;
  };

  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.rating}</td>
      <td>{player.matchesPlayed}</td>
      <td>{player.wins}</td>
      <td>{player.losses}</td>
      <td>{calculateWinPercentage()}%</td>
    </tr>
  );
};

export default Player;
