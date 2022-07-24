const Transaction = require('./transaction')

describe("Transaction", () => {
  it("displays the date", () => {
    const transaction = new Transaction();
    expect(transaction.showTransaction()).toEqual("24/07/2022 || || || ");
  })
})