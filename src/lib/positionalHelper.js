export const getFullPositionText = position => {
  const positions = {
    QB: "quarterback",
    RB: "running back",
    WR: "wide receiver",
    TE: "tight end",
    "D/ST": "defense",
    K: "kicker",
  }
  return positions[position]
}
