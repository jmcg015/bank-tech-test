class Account {

  constructor() {
    this.balance = 0.00;
    this.transactionDate = new Date().toLocaleDateString("en-GB");
    this.transactions = [{
      date: this.transactionDate,
      credit: 0.00,
      debit: 0.00,
      balance: this.balance }];
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.transactions[0].credit = amount;
    return this.balance += amount;
  }

  withdraw(amount) {
    return this.balance -= amount;
  }

  getTransactionDate() {
    console.log(this.transactionDate)
    return this.transactionDate;
  }

  printStatement() {
    const date = this.getTransactionDate();
    const credit = this.transactions[0].credit;
    return `date || credit || debit || balance\n${date} || ${credit.toFixed(2)} || || ${this.balance.toFixed(2)}`;
  }
}

module.exports = Account