const Product = require('../class/Product')

test('Deve ter lucro correto', () => {
    const product = new Product('lapis','escolar',10,5,20,'Sim')
    expect(product.bank).toBe(5)
})

test('Deve ser instanciado Corretamente', () => {
    const product = new Product('lapis','escolar',10,5,20,'Sim')
    expect(product).toEqual({
  name: 'lapis',
  category: 'escolar',
  sellPrice: 10,
  cost: 5,
  amountInPack: 20,
  isResale: 'Sim',
  bank: 5,
  bankPack: 100,
  hasPositiveBank: true
})
})


