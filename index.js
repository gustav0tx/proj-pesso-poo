const Product = require('./class/Product')
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

                console.table(data)

                choseTable = prompt(`
                Escolha uma opção: 
                
                1: Verificar retabilidade dos produtos
                2: Voltar
                `)

                if (choseTable == '1') {
                    let dataProfitable = {}
                    names.forEach((el, i) => {
                        dataProfitable[el] = data[el].profitable()
                    })
                    console.table(dataProfitable)
                }
            } while (choseTable != '2')

            break

        case '3':
            run = false
            break
    }

} while (run)