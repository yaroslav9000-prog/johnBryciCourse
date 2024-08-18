interface OperationDepWith{
    operationType: "deposit" | "withdraw",
    date: Date,
    amount: number
}

interface Loan{
    operationType: "loan",
    date: Date,
    paymentAmount: number,
    interest: number,
    amount: number
}

interface AccountOperation{
    accountNum: number,
    operationType: Loan | OperationDepWith 
}

export{
    AccountOperation
}