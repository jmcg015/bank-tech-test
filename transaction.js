class Transaction {
  constructor({ credit = null, debit = null, balance = null } = {}) {
    this.transactionDate = new Date(Date.now());
    this.credit = credit;
    this.debit = debit;
    this.balance = balance
  }

  showTransaction() {
    return [
      `${this.transactionDate.toLocaleDateString("en-GB")} `,
      this.#formatOutput(this.credit),
      this.#formatOutput(this.debit),
      this.#formatOutput(this.balance),
    ].join("|| ")
  }

  #formatOutput(item) {
    return ((item != null) ? `${item.toFixed(2)} ` : null);
  }
}

module.exports = Transaction;
