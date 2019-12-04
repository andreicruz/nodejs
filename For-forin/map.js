const service = require('./service')

async function main(){
    try {
        const results = await service.obterPessoas(`a`)
        // const names = []
        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })
        const names = results.results.map(function(item){
            return item.name
        })
        console.log(`names `, names)
    } catch (error) {
        console.error(`error `, error)
    }
}

main()