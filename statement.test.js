const Statement = require('./statement');
const Account = require('./account');

jest.mock('./account');

describe('printStatement', () => {
  beforeEach(() => {
    Account.mockClear();
  });

  xit('initially prints out an empty statement', () => {
    const statement = new Statement();
    expect(statement.printStatement()).toEqual("date || credit || debit || balance\n || || ||")
  })

  xit('formats the withdrawal, deposit, balance and date into a statement with a deposit values', () => {
    //const statement = new Statement();
    const mockAccount = new Account();
    mockAccount.deposit(100.00).mockImplementation(() => 100.00);
    mockAccount.getTransactionDate().mockImplementation(() => "24/07/2022");
    mockAccount.showBalance().mockImplementation(() => 100.00);
    expect(statement.printStatement()).toEqual("date || credit || debit || balance\n24/07/2022 || 100.00 || || 100.00")
  })
})