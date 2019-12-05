const { deepEqual, ok } = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRADO = { 
    nome: 'Flash', 
    poder: 'Speed', 
    id: 1
}

describe('Suiet de manipulação de heróis', () => {
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    // it('deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRADO
    //     ok(null, expected)
    // })
})