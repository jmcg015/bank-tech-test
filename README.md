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

The program will look something like this when it has been run:

![image image of bank account running](/img/bank-account.png)

## Running Tests
Tests are carried out using Jest. They can be carried out from the directory in the command line using:
```
npm test
```

Code coverage can be ran using:

```
npm run coverage
```

## Approaching the problem

I first broke this problem down by thinking of what classes I'd ultimately need. Initially I decided on having 