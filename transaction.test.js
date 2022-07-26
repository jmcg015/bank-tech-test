const Transaction = require('./transaction')

describe("Transaction", () => {
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => new Date("2022-07-25"));
  });

  afterAll(() => {
    Date.now.mockRestore();
  });

  it("displays the date in DD/MM/YYYY format", () => {
    const transaction = new Transaction();
    expect(transaction.showTransaction()).toEqual(`25/07/2022 || || || `);
  })

  it("displays the credit amount", () => {
    const transaction = new Transaction({ credit: 100 });
    expect(transaction.showTransaction()).toEqual(`25/07/2022 || 100.00 || || `);
  })

  it("displays the debit amount", () => {
    const transaction = new Transaction({ credit: 100, debit: 50 });
    expect(transaction.showTransaction()).toEqual(`25/07/2022 || 100.00 || 50.00 || `);
  })

  it("displays the balance", () => {
    const transaction = new Transaction({ balance: 100 });
    expect(transaction.showTransaction()).toEqual(`25/07/2022 || || || 100.00 `);
  })
})