// src/utils/eloUtils.js
export function calculateELO(playerRating, opponentRating, outcome, kFactor) {
  const expectedScore = 1 / (1 + 10 ** ((opponentRating - playerRating) / 400));
  const actualScore = outcome === "win" ? 1 : outcome === "draw" ? 0.5 : 0;
  const newRating = playerRating + kFactor * (actualScore - expectedScore);

  return Math.round(newRating);
}
