const Accont = require('./Accont')

class AccontPositive extends Accont{
    calcBalance() {
        
    }
    
    checkBalance() {
        return `Seu saldo é ${this.calcBalance()}`
    }
}