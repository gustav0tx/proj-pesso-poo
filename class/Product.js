class Product {
    static productsCreated = 0

    static resetCountProduct() {
        this.productsCreated = 0
    }

    #id
    constructor(name, category, sellPrice, cost, amountInPack, isResale) {
        this.name = name
        this.category = category
        this.sellPrice = sellPrice
        this.cost = cost
        this.amountInPack = amountInPack
        this.isResale = isResale
        this.bank = this.sellPrice - this.cost
        this.bankPack = this.bank * this.amountInPack
        this.hasPositiveBank = this.bank > 0
        this.#id = Product.productsCreated
        Product.productsCreated++
    }

    get id() {
        return this.#id
    }

    set id(val) {
        typeof val == typeof 0 ? this.#id = val : null
    }

    profitable() {
        if(this.hasPositiveBank) {
            return `${this.name} é um produto rentavel, e tem R$${this.bank} de lucro, +${(this.bank / this.sellPrice) * 100}%`
        }  else {
            return `${this.name} não é um produto rentavel, e tem R$${this.bank} de defic, ${(this.bank / this.sellPrice) * 100}%`
        }
    }

}

module.exports = Product