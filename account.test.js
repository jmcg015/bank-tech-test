const Account = require('./account');

describe('Account', () => {
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => new Date("2022-07-25"));
  });

  afterAll(() => {
    Date.now.mockRestore();
  });

  describe('Deposit', () => {
    it("adds 500 to the balance", () => {
      const account = new Account();
      const mockTransaction = {
        showTransaction: () => " || 500.00 || || 500.00"
      }
      mockTransaction.showTransaction()
      expect(account.deposit(500)).toEqual("£500.00 deposited. Balance is £500.00");
    })

    it("adds 50.50 to existing 1000.00 balance", () => {
      const account = new Account();
      account.setBalance(1000)

      const mockTransaction = {
        showTransaction: () => " || 50.50 || || 1050.50"
      }
      mockTransaction.showTransaction()
      expect(account.deposit(50.50)).toEqual("£50.50 deposited. Balance is £1050.50");
    })
  })

  describe('Withdraw', () => {
    it('withdraws 100 from the balance of 1000', () => {
      const account = new Account();
      account.setBalance(1000)
  
      const mockWithdrawal = {
        showTransaction: () => " || || 100.00 || 900.00"
      }

      mockWithdrawal.showTransaction();
      expect(account.withdraw(100)).toEqual("Withdrew £100.00. Balance is £900.00");
      
    })

    it("won't withdraw if withdrawal is greater than balance", ()  => {
      const account = new Account();
      const mockWithdrawal = {
        showTransaction: () => " || || 100.00 || 900.00"
      }
      mockWithdrawal.showTransaction()
      expect(account.withdraw(50)).toEqual("Must acquire additional resources")
    })

    it('withdraws 41.50 from 45.00 balance', () => {
      const account = new Account();
      account.setBalance(45.00);

      const mockWithdrawal = {
        showTransaction: () => " || || 41.50 || 3.50"
      }

      mockWithdrawal.showTransaction()

      expect(account.withdraw(41.50)).toEqual("Withdrew £41.50. Balance is £3.50");
    })
   })

  // it('formats the information to display like: DATE || CREDIT || DEBIT || BALANCE', () => {
  //   const account = new Account();
  //   const spy = jest.spyOn(account, 'deposit')
  //   const mockTransaction = {
  //     showTransaction: () => " || 1000.00 || || 1000.00"
  //   }
  //   mockTransaction.showTransaction();
  //   account.deposit(1000)
  //   expect(spy).toHaveBeenCalledWith(1000)
  //   expect(account.printStatement()).toEqual(`25/07/2022 || 1000.00 || || 1000.00 `);
  // })

  it('returns the headings DATE || CREDIT || DEBIT || BALANCE', () => {
    const account = new Account();
    expect(account.printHeading()).toEqual("DATE || CREDIT || DEBIT || BALANCE")
  })

  it('initially prints out an empty statement', () => {
    const account = new Account();
    const spy = jest.spyOn(console, 'log');
    console.log("date || credit || debit || balance\n || || || ")
    expect(spy).toHaveBeenCalledWith("date || credit || debit || balance\n || || || ")
  })
})