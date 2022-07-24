class Account {

  constructor() {
    this.balance = 0.00;
    this.credits = [];
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.credits.push(amount);
    return this.balance += amount;
  }

  withdraw(amount) {
    return this.balance -= amount;
  }

  getTransactionDate() {
    const now = new Date();
    return now.toLocaleDateString("en-GB");
  }

  printStatement() {
    const date = this.getTransactionDate();
    const credit = this.credits.at(-1);
    return `date || credit || debit || balance\n${date} || ${credit.toFixed(2)} || || ${this.balance.toFixed(2)}`;
  }
}

module.exports = Account