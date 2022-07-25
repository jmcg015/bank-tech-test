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
    this.allTransactions.unshift(new this.transaction({ credit: amount, balance: this.balance}));
    return `£${creditAmount} deposited. Balance is £${this.#formatMoney(this.balance)}`
  }

  withdraw(amount) {
    const debitAmount = this.#formatMoney(amount);
    if (debitAmount > this.balance) return "Must acquire additional resources"
    this.balance -= amount;
    this.allTransactions.unshift(new this.transaction({ debit: amount, balance: this.balance}))
    return `Withdrew £${debitAmount}. Balance is £${this.#formatMoney(this.balance)}`
  }

  printStatement() {
    const HEADING = "date || credit || debit || balance";
    return this.allTransactions.map((item) => {
      console.log(item.showTransaction());
    });
  }

  #formatMoney(value) {
    return value.toFixed(2);
  }

}

module.exports = Account