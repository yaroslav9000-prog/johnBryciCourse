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
    private _clients: Client[] = [];
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
    getClientReport(id:String):void{
        let clientInfo ;
        for(let index =0; index < this._clients.length; index++){
            if(this._clients[index].getClientID == id){
                clientInfo = this._clients[index].getClientInfo();
                console.log(clientInfo);
                return;
            }
        }
    }
    public addNewClient(name:String, id:String, typeOfClient: String){
        const newClient = new Client(name, id, typeOfClient);
        this._clients.push(newClient);
        newClient.addAccount();
    }
    public getReportAll(){
        for(let index = 0; index < this._clients.length; index++){
            console.log(this._clients[index].getClientInfo());
        }
    }
}
class Client{    
    private _name!: String;
    private _id!: String;
    private _typeOfClient!: String;
    private _accountsList: Account[] = [];
    private _totalAccounts: number =0;

    constructor(name: String, id: String, clientType: String){
        this.setName = name;
        this.setClientId = id;
        this.setClientType = clientType;
        
        
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
    get getTotalMoney():number{
        let totalMoneyClient = 0;
        for(let index =0; index< this._accountsList.length; index++){
            totalMoneyClient += this._accountsList[index].getAccountMoney;
        }
        return totalMoneyClient;
    }
    get getClientID():String{
        return this._id;
    }
    public addAccount(){
        let newAccount 
        if(this._accountsList.length ==0){
            let nodeId = 1;
            newAccount = new Account(nodeId, this._id);
            this._accountsList.push(newAccount);
            this._totalAccounts++;
            return;
        }
        newAccount = new Account(this._accountsList.length, this._id);
        this._totalAccounts ++;
    }
    getAccountsReport():String{
        let totalAccountsReport ='';
        for(let index =0; index < this._accountsList.length; index++){
            totalAccountsReport+= `${this._accountsList[index].getAccountInfo}\n`;           
        }
        return `Hello ${this._name}, you have ${this._totalAccounts} accounts.\n 
        Total sum: ${this.getTotalMoney}\n
        ${totalAccountsReport}
        `;
    }
    getClientInfo():String{
        return`Name:${this._name}, ID: ${this._id}\n Total money: ${this.getTotalMoney}`;
    }

}
class Account{
    private _nodeId !: number;
    private _clientId!: String;
    private _totalMoney: number =0;

    constructor(nodeId: number, clientId: String){
        this._nodeId = nodeId;
        this._clientId = clientId;
    }
    public deposit(value:number){
        if(value > 0){
            this._totalMoney += value;
        }
    }
    public withdraw(value: number){
        if(value > 0){
            this._totalMoney -= value;
        }
    }
    get getAccountMoney():number{
        return this._totalMoney;
    }
    get getNodeID():number{
        return this._nodeId;
    }    
    get getClientID():String{
        return this._clientId;
    }
    get getAccountInfo():String{
        return `Account Id ${this._nodeId}-${this._clientId}, Total money: ${this._totalMoney}`;
    }
}


const bankPoalim = new Bank("Hapoalim");
bankPoalim.addNewClient('Yaroslav', "320691660", 'regular');
bankPoalim.addNewClient('Vadim', "217555455", "gold")
console.log(bankPoalim.getClientReport('320691660'));
bankPoalim.getReportAll();