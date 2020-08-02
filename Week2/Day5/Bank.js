class Bank{
    constructor(code, address){
        this.code=code;
        this.address=address;
        this.manager=function(){
            return "managerName"
        }
        this.maintains=function(){
            return "maintains"
        }
    }
}

class Customer extends Bank{
    constructor(name,adress,dob,cardNumber,pin){
        super(address)
        this.name=name;
        this.dob=dob;
        this.cardNumber=cardNumber;
        this.pin=pin;
        this.password=function(){
            return this.pin;
        }

    }
}

class ATM extends Bank {
    constructor(location, managedby){
        super(address,manager)
        this.identifies=function(){
            return accNo
        }
        this.transactions=function(){
            return "transactions";
        }
    }
}

class Account extends Bank, ATM{
    constructor(number,balance){
        super(transactions)
        this.number=number;
        this.balance=balance;
        this.deposit=function(){
            return "amount deposits";
        }
        this.withdraw=function(){
            return "amount withdraws";
        }
        this.createTransactions=function(){
            return this.transactions();
        }
    }
}

class ATM_Transactions extends Account{
    constructor(transactionID,date,type,amount,postBalance){
        super(transactions)
        this.modifies=function(){
            return "modified"
        }
    }
}

class Current_Account extends Account{
    constructor(accNo,balance){
        this.accNo=accNo;
        this.balance=balance;
        this.withdraw=functon(){
            return "withdraws"
        }
    }
}

class Saving_Account extends Current_Account{
    constructor(accNo,balance){
        super(accNo,balance)
    }
}

