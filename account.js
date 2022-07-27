const Transaction = require('./transaction')

class Account {

  constructor(transaction = Transaction) {
    this.balance = 0;
    this.transaction = transaction;
    this.allTransactions = [];
  }

  setBalance(amount) {
    this.balance += amount;
  }

  deposit(amount) {
    const creditAmount = this.#formatMoney(amount);
    this.balance += amount;
    const newTransaction = new Transaction({ credit: amount, balance: this.balance });
    this.allTransactions.unshift(newTransaction);
    return `£${creditAmount} deposited. Balance is £${this.#formatMoney(this.balance)}`
  }

  withdraw(amount) {
    const debitAmount = this.#formatMoney(amount);
    if (debitAmount > this.balance) return "Must acquire additional resources"
    this.balance -= amount;
    const newTransaction = new Transaction({ debit: amount, balance: this.balance });
    this.allTransactions.unshift(newTransaction);
    return `Withdrew £${debitAmount}. Balance is £${this.#formatMoney(this.balance)}`
  }

  printStatement() {
    if (this.allTransactions.length !== 0) {
      return this.allTransactions.map((item) => {
        return(`${this.printHeading()}${item.showTransaction()}`);
      }).join("\n");
    } else {
     console.log(` || || || `);
    }
  }

  printHeading() {
    return "DATE || CREDIT || DEBIT || BALANCE\n"
  }

  #formatMoney(value) {
    return value.toFixed(2);
  }

}

module.exports = Account