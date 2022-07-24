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

  getTransactionDate() {
    const now = new Date();
    return now.toLocaleDateString("en-GB");
  }

  printStatement() {
    return "date || credit || debit || balance\n24/07/2022 || || ||"
  }
}

module.exports = Account