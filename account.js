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
    const HEADING = "date || credit || debit || balance\n";
    console.log(HEADING)
    if (this.allTransactions.length !== 0) {
      return this.allTransactions.map((item) => {
        return(`${item.showTransaction()}`);
      }).join("\n");
    } else {
     console.log(` || || || `);
    }
  }

  #formatMoney(value) {
    return value.toFixed(2);
  }

}

module.exports = Account