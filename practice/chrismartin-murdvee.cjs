function getTotalQuantity(items) {
  let total = 0;

  for (const item of items) {
    // liidame ainult numbrid
    if (Number.isFinite(item.quantity)) {
      total += item.quantity;
    }
  }

  return total;
}

module.exports = { getTotalQuantity };
