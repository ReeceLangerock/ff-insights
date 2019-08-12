export default {
  getOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  },
  highLowHelper(rank, count) {
    if (rank === 1) {
      return "highest";
    } else if (rank === count) {
      return "lowest";
    } else {
      return `${this.getOrdinal(rank)} highest`;
    }
  }
};
