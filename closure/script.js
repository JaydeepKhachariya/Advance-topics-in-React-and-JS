//This is best example in my mind for closure, becuase here we are returning object with functions and those functions are using the variables of parent function.


function balanceUtilites() {
    const initialBalance = 100;

    function getBalance() { 
        return initialBalance;
    }

    function deposit(amount) {
        return initialBalance + amount;
    }

    function withdraw(amount) {
        return initialBalance - amount;
    }

    return {
        getBalance,
        deposit,
        withdraw
    }
}

const balance = balanceUtilites();

console.log(balance.getBalance()); // 100
console.log(balance.deposit(50)); // 150
console.log(balance.withdraw(25)); // 75
