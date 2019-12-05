const { deepEqual, ok } = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRADO = { 
    nome: 'Flash', 
    poder: 'Speed', 
    id: 1
}

describe('Suiet de manipulação de heróis', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
    })
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRADO)
        const [atual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id)
        deepEqual(atual, expected)
    })
    it('deve remover um heroi pelo id', async () => {
        const expected = true
        const resultado = await database.removerPeloId(DEFAULT_ITEM_CADASTRADO.id)
        deepEqual(resultado, expected)
    })
})