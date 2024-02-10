// src/utils/generateRandomPlayers.js
const generateRandomPlayers = () => {
  const players = [];

  for (let i = 1; i <= 10; i++) {
    const matchesPlayed = Math.floor(Math.random() * 50) + 1; // Random matches played between 1 and 50
    const wins = Math.min(
      Math.floor(Math.random() * matchesPlayed),
      matchesPlayed - 1
    ); // Random wins, ensuring it's not greater than matches played

    const player = {
      id: i,
      name: `Player ${i}`,
      rating: Math.floor(Math.random() * 500) + 1000, // Random ELO between 1000 and 1500
      matchesPlayed,
      wins,
    };

    player.losses = matchesPlayed - wins; // Calculate losses
    player.winPercentage = ((wins / matchesPlayed) * 100).toFixed(2); // Calculate win percentage
    player.rank = i; // Set rank based on the iteration (1 to 10)

    players.push(player);
  }

  // Sort players by ELO in descending order
  players.sort((a, b) => b.rating - a.rating);

  return players;
};

export default generateRandomPlayers;
