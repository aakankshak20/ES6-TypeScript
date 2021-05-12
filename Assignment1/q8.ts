class Account{
     constructor(id,name,balance){
         this.name=name;
         this.id=id;
         this.balance=balance;
     }

     total_balance=(x,y){
        
        let bbalance=x+y;
        return bbalance;
     }
}

class SavingAccount extends Account{
    
     constructor(interest){
         super(interest);
       
        console.log("Interest "+interest);

     }

     calinterest(interest){
         return interest;
     }
}

class CurrentAccount extends Account{
    
    constructor(cash_credit){
       super(cash_credit);
      
       console.log("cash credit"+cash_credit);

    }
    cash(cash_credit){
        return cash_credit;
    }

}


let a=new Account(3,"abc",500);
 let s=new SavingAccount(200);
 let c=new CurrentAccount(100);



 let val=s.calinterest(200);
 let val2=c.cash(100);

 let y=c.total_balance(val,val2);
 console.log(y);