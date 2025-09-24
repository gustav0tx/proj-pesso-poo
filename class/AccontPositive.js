const Accont = require('./Accont')

class AccontPositive extends Accont{
    calcBalance() {
        let result = 0
        this.productsArr.forEach((el, i) => {
            result += el.bankPack
        })
        return result
    }
    
    checkBalance() {
        return this.calcBalance()
    }
}

module.exports = AccontPositive