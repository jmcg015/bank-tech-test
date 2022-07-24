class Transaction {
  constructor() {
    this.transactionDate = `${new Date().toLocaleDateString("en-GB")} `;
  }

  showTransaction() {
    return "24/07/2022 || || || "
  }
}

module.exports = Transaction;