/*
{
      "_id": "66bb89bf73e3ad5d6c1c9322",
      "accountNum": 2,
      "operationType": {
        "operationType": "withdraw",
        "date": "Sat Sep 13 275760 00:00:00 GMT+0000",
        "amount": 5000
      },
      "id": "66bb89bf73e3ad5d6c1c9322"
    },
    {
      "_id": "66bb89e873e3ad5d6c1c9324",
      "accountNum": 2,
      "operationType": {
        "operationType": "deposit",
        "date": "Sat Sep 13 275760 00:00:00 GMT+0000",
        "amount": 100000
      },
      "id": "66bb89e873e3ad5d6c1c9324"
    }
  ]
*/
type Loan={
    operationType: "loan",
    date: string,
    amount: number,
    interest: number,
    paymentAmount: number

}
type DepositWithdraw={
    operationType: "deposit" | "withdraw",
    date: string,
    amount: number
}

export type Operation={
    _id?: string,
    accountNum: number,
    operationType: DepositWithdraw | Loan
}