const Account = require('./account');

describe('Account', () => {
  describe('showBalance', () => {
    it('initially has a balance of 0.00', () => {
      const account = new Account();
      expect(account.showBalance()).toEqual(0.00);
    })
  })

  describe('Deposit', () => {
    it("adds 5.00 to the balance", () => {
      const account = new Account();
      account.deposit(5.00);
      expect(account.showBalance()).toEqual(5.00);
    })
  })

})