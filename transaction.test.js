const Transaction = require('./transaction')

describe("Transaction", () => {
  it("displays the date in DD/MM/YYYY format", () => {
    const transaction = new Transaction();
    const mockedDate = "24/07/2022"
    expect(transaction.showTransaction()).toEqual(`${mockedDate} || `);
  })

  it("displays the credit amount", () => {
    const transaction = new Transaction({ credit: 100 });
    const mockedDate = "24/07/2022"
    expect(transaction.showTransaction()).toEqual(`${mockedDate} || 100.00 `);
  })
})