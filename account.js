const Statement = require('./statement')

class Account {

  constructor() {
    this.balance = 0.00;
    this.transactionDate = `${new Date().toLocaleDateString("en-GB")} `;
    this.credit = null;
    this.debit = null;
  }

  display() {
    return [
      this.transactionDate,
      this.#formatOutput(this.credit),
      this.#formatOutput(this.debit),
      this.#formatOutput(this.balance),
    ].join("|| ")
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.credit += amount;
    return this.balance += amount;
  }

  withdraw(amount) {
    this.debit = amount
    if (this.debit > this.balance) return "Must acquire additional resources"
    return this.balance -= amount;
  }

  getTransactionDate() {
    return this.transactionDate;
  }

  printStatement() {
    const HEADING = "date || credit || debit || balance";
    return `${HEADING}\n${this.display()}`;
  }

  #formatOutput(item) {
    if (item != null) {
      return `${item.toFixed(2)} `;
    }
  }
}

module.exports = Account