{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        set deposit(ammount: number) {
            this._balance = this.balance + ammount
        }



        get balance() {
            return this._balance
        }



        // public getBalance() {
        //     return this._balance;
        // }


    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);
    // goribManusherAccount.balance = 0;
    // goribManusherAccount.addDeposit(20);
    goribManusherAccount.deposit = 200
    // const myBalance = goribManusherAccount.getBalance();

    const myBalance = goribManusherAccount.balance;
    console.log(myBalance);

    //
}