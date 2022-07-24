const Statement = require('./statement')
const Transaction = require('./transaction')

class Account {

  constructor(transaction = Transaction) {
    this.balance = 0.00;
    this.transaction = transaction;
    this.allTransactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.allTransactions.unshift({ credit: amount, balance: this.balance} );
    return `£${amount.toFixed(2)} deposited. Balance is £${this.balance.toFixed(2)}`
  }

  withdraw(amount) {
    this.debit = amount
    if (this.debit > this.balance) return "Must acquire additional resources"
    return this.balance -= amount;
  }

  printStatement() {
    const HEADING = "date || credit || debit || balance";
    return `${HEADING}\n${this.display()}`;
  }

}

module.exports = Account