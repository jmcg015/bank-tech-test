const Transaction = require('./transaction')

describe("Transaction", () => {
  it("displays the date", () => {
    const transaction = new Transaction();
    const mockedDate = "24/07/2022"
    expect(transaction.showTransaction()).toEqual(`${mockedDate} || || || `);
  })
})