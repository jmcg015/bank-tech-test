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

I first broke this problem down by thinking of what classes I'd ultimately need. Initially I decided on having two classes: Account and Statement.

Account would be responsible for knowing and showing the balance, being able to deposit and withdraw money and then call the print function.

The print function would then call the Statement class which would format and print the output. 

As I was going through the Account class, I realised I should make a transaction class. 

The transaction class would represent a single transaction, which would be specified when the class was instantiated along with the balance. The transaction date would be created within the constructor. 

Within the transaction class, I had one private method to format the number to 2 decimal places. The other function, showTransaction(), takes the credit or debit, date and balance and stores them in an array which is then joined together separated by || between values. 

Moving this functionality to a separate class made it much easier for me to output the date and specific transaction. 

After implementing this in the printStatement() function, I decided against keeping a statement class it was one function pulling the data in from the Transaction class and then mapped through in printStatement. I believed that creating a new class would overly complicate what was already a fairly minimal solution. 

