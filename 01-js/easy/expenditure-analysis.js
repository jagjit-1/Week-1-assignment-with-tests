/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const costBreakUp = {};
  const totalTransactions = transactions.length;
  for (var i = 0; i < totalTransactions; i++) {
    const category = transactions[i].category;
    const amount = transactions[i].price;
    if (costBreakUp[category]) costBreakUp[category] += amount;
    else costBreakUp[category] = amount;
  }
  const final = []
  for (const category in costBreakUp) final.push({ category, totalSpent: costBreakUp[category] });
  return final;
}

module.exports = calculateTotalSpentByCategory;
