const Account = require('./account');

describe('Account', () => {
  describe('Initially', () => {
    it('has a balance of 0.00', () => {
      const account = new Account();
      expect(account.showBalance()).toEqual(0.00);
    })
  })

})