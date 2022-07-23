class Account {

  constructor() {
    this.balance = 0.00;
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    return this.balance += amount;
  }

  withdraw(amount) {
    return this.balance -= amount;
  }
}

module.exports = Account