class Transaction {
  constructor({ credit = null } = {}) {
    this.transactionDate = `${new Date().toLocaleDateString("en-GB")} `;
    this.credit = credit;
  }

  showTransaction() {
    return [
      this.transactionDate,
      this.#formatOutput(this.credit),
      // this.#formatOutput(this.debit),
      // this.#formatOutput(this.balance),
    ].join("|| ")
  }

  #formatOutput(item) {
    if (item != null) {
      return `${item.toFixed(2)} `;
    }
  }
}

module.exports = Transaction;