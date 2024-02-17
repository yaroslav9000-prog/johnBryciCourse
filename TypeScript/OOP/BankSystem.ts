/*
Design a Bank system
• 3 types of clients - regular, gold & platinum
• each client holds a collection of accounts
    • Can add/remove account
    • Account reports
    • Total accounts
    • Total Money
• Each account supports
    • Current amount
    • Deposit operation
    • Withdraw operation
    • Status (allowed, warned, blocked)
• The bank supports
    • Adding / removing clients
    • Reports:
        • Client list report
        • Total accounts report
        • Total money report
        • Total activity (clients and account operation summery)
*/

class Bank{
    public static kindsOfClients:String[] = ["regular", "gold", "platinum"];
    private _name!: String;
    private _clients: Client[];
    private _totalAccounts: number =0;
    private _totalMoney: number = 0;
    private _totalActivity: number = 0;

    constructor(name: String){
        this.setBankName = name;
    }
    set setBankName(value: String){
        if(value.length > 3){
            this._name = value;
            return;
        }
        else{console.log("Name Cant be shorter than 2 character.");}
    }
    public addNewClient(){

    }
}
class Client{    
    private _name!: String;
    private _id!: String;
    private _typeOfClient!: String;
    private _totalMoney: number;
    private _accountsList!: Account[];
    private _totalAccounts!: number;

    constructor(name: String, id: String, clientType: String){
        this.setName = name;
        this.setClientId = id;
        this.setClientType = clientType;
        this._totalMoney = 0;
        
    }
    set setName(value: String){
        this._name = value;
    }
    set setClientType(value:String){
        if(Bank.kindsOfClients.includes(value)){
            this._typeOfClient = value;
            return;
        }
        console.log("Client type not existant");
    }
    set setClientId(value: String){
        let flag = 0;
        if(value.length > 9 || value.length < 9){
            console.log("Id should be 9 digits long");
            return;
        }else{
            for(let index =0; index< value.length; index++){
                if(typeof(parseInt(value[index])) === "number"){
                    flag++;
                }else{
                    console.log("your id contains number");
                    return;
                }
            }
        }
        if(flag == 9){
            this._id = value;
        }
    }


}
class Account{

}