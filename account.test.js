const Account = require('./account');

describe('Account', () => {
  })

  describe('Deposit', () => {
    it("adds 500 to the balance", () => {
      const account = new Account();
      expect(account.deposit(500.00)).toEqual("£500.00 deposited. Balance is £500.00");
    })

    it("adds 50.00 and 1000.00 to the balance", () => {
      const account = new Account();
      account.deposit(50.50);
      expect(account.deposit(1000.00)).toEqual("£1000.00 deposited. Balance is £1050.50");
    })


  describe('Withdraw', () => {
    it('withdraws 100 from the balance of 1000', () => {
      const account = new Account();
      account.deposit(1000);
      expect(account.withdraw(100)).toEqual("Withdrew £100.00. Balance is £900.00");
    })

    it("won't withdraw if withdrawal is greater than balance", ()  => {
      const account = new Account();
      expect(account.withdraw(50)).toEqual("Must acquire additional resources")
    })

    it('withdraws 5.00 and 41.50 from the balance', () => {
      const account = new Account();
      account.deposit(50.00);
      account.withdraw(5.00);
      expect(account.withdraw(41.50)).toEqual("Withdrew £41.50. Balance is £3.50");
    })
   })

  it('formats the information to display like: DATE || CREDIT || DEBIT || BALANCE', () => {
    const account = new Account();
    const mockedDate = new Date(2022, 6, 25).toLocaleDateString("en-GB")
    account.deposit(1000);
    expect(account.printStatement()).toContain(`${mockedDate} || 1000.00 || || 1000.00 `);
  })

  it('initially prints out an empty statement', () => {
    const account = new Account();
    const date = "24/07/2022"
    expect(account.printStatement()).toContain(`date || credit || debit || balance\n || || || `)
  })

  // it('formats the withdrawal, deposit, balance and date into a statement with a deposit values', () => {
  //   //const statement = new Statement();
  //   const account = new Account();
  //   account.deposit(100.00);
  //   expect(account.printStatement()).toEqual("date || credit || debit || balance\n24/07/2022 || 100.00 || || 100.00 ")
  // })

})