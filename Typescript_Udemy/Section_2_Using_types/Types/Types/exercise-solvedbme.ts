//key learning:
// - When you assign a variable always use types
// - You can create custom types if it is used more than once

type bankAccountType = { money:number,deposit:(value:number)=>void};
// It is not needed to especially create a type if we just use it once
type myselfType = { name:string,bankAccount:bankAccountType,hobbies:string[]};

let bankAccount :bankAccountType = {
    money: 2000,
//Could have assigned a specific type to here as well.    
    deposit(value) {
        this.money += value;
    }
};

let myself :myselfType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

