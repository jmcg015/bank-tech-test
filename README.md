# Bank Tech Test

## How to use and install

1) Fork the repo

2) Access node from the command line
``` zsh
node
```

3) Require the file in node
```
const Account = require('./account);
```

4) Initialise the class
```
const account = new Account();
```

5a) To deposit into the account:
```
account.deposit(1000)
```

Accounts start with a default balance of 0. 

5b) To withdraw from the account:
```
account.withdraw(500)
```

Accounts cannot withdraw if the withdrawal amount is greater than the account balance

6) To print the statement:
```
account.printStatement();
```

