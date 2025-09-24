const Product = require('./class/Product')
const AccontNegative = require('./class/AccontNegative')
const AccontPositive = require('./class/AccontPositive')
const Accont = require('./class/Accont')
const prompt = require('prompt-sync')()

let run = true
const products = []
const names = []
const data = {}
do {
    let chose = prompt(`
    Bem-Vindo ao Stock and Control, Escolha uma ação!

    1: Cadastrar produto
    2: Verificar Estoque
    3: Fechar App 
    `)

    switch (chose.trim()) {
        case '1':
            let name = prompt('Nome do produto: ')
            let category = prompt('Categoria do produto: ')
            let sellPrice = parseInt(prompt('Preço de venda do produto: '))
            let cost = parseInt(prompt('Custo do produto: '))
            let amountInPack = parseInt(prompt('Quantidade do produto por pacote: '))
            let isResale = prompt('É um produto de revenda [Sim/Nao]: ')

            const product = new Product(name, category, sellPrice, cost, amountInPack, isResale)

            names.push(product.name)
            products.push(product)
            console.log('Produto Cadastrado!')

            break

        case '2':
            let choseTable
            do {
                names.forEach((el, i) => {
                    data[el] = products[i]
                })

                choseTable = prompt(`
                Escolha uma opção: 
                
                1: Verificar retabilidade dos produtos
                2: Verificar tabela de produtos
                3: Verificar Saldo total
                4: Voltar
                `)

                switch (choseTable) {
                    case '1':
                        let dataProfitable = {}
                        names.forEach((el, i) => {
                            dataProfitable[el] = data[el].profitable()
                        })
                        console.table(dataProfitable)
                        break
                    case '2':
                        console.table(data)
                        break
                    case '3':
                        let balance = 0
                        let accont;

                        products.forEach(el => {
                            balance += el.bankPack
                        })

                        if(balance > -1){
                            accont = new AccontPositive(products)
                        } else {
                            accont = new AccontNegative(products)
                        }

                        console.log(`Seu saldo é de R$${accont.calcBalance()}`)
                        break
                }
            } while (choseTable != '4')

            break

        case '3':
            run = false
            break
    }

} while (run)