class Transaction {
  constructor({ credit = null, debit = null, balance = null } = {}) {
    this.transactionDate = `${new Date().toLocaleDateString("en-GB")} `;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance
  }

  showTransaction() {
    return [
      this.transactionDate,
      this.#formatOutput(this.credit),
      this.#formatOutput(this.debit),
      this.#formatOutput(this.balance),
    ].join("|| ")
  }

  #formatOutput(item) {
    return ((item != null) ? `${item.toFixed(2)} ` : "");
  }
}

module.exports = Transaction;