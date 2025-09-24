const Accont = require('./Accont')

class AccontNegative extends Accont{
    calcBalance() {
        let result = 0
        this.productsArr.forEach((el, i) => {
            result += el.bankPack
        })
        return result
    }
    
    checkBalance() {
        return `Seu saldo é negativo de R$${this.calcBalance()}`
    }
}

module.exports = AccontNegative