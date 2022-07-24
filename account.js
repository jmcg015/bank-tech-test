const Statement = require('./statement')
const Transaction = require('./transaction')

class Account {

  constructor(transaction = Transaction) {
    this.balance = 0;
    this.transaction = transaction;
    this.allTransactions = [];
  }

  deposit(amount) {
    const creditAmount = this.#formatMoney(amount);
    this.balance += amount;
    this.allTransactions.unshift({ credit: amount, balance: this.balance});
    return `£${creditAmount} deposited. Balance is £${this.#formatMoney(this.balance)}`
  }

  withdraw(amount) {
    const debitAmount = this.#formatMoney(amount);
    if (debitAmount > this.balance) return "Must acquire additional resources"
    this.balance -= amount;
    return `Withdrew £${debitAmount}. Balance is £${this.#formatMoney(this.balance)}`
  }

  printStatement() {
    const HEADING = "date || credit || debit || balance";
    return `${HEADING}\n${this.display()}`;
  }

  #formatMoney(value) {
    return value.toFixed(2);
  }

}

module.exports = Account