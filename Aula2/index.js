// modulo interno interno do node.js
const util = require('util');
const getAddressAsync = util.promisify(getAddress)

function getUser(){
    return new Promise(function solvePromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: "Andrei",
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function getTelephone(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '51111',
                ddd: '51'
            })
        }, 2000);
    })
}

function getAddress(userId, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'rua teste',
            numero: 2131
        })
    })
}

main()
async function main(){
    try{
        const usuario = await getUser();
        // const telefone = await getTelephone(usuario.id);
        // const endereco = await getAddressAsync(usuario.id);
        const resultado = await Promise.all([
            getTelephone(usuario.id),
            getAddressAsync(usuario.id)
        ])

        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
            Nome: ${usuario.nome}
            Telefone: ${telefone.ddd} ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}   
        `)
    }catch(error){
        console.error(`error no async`);
    }
}
// const userPromise = getUser();

// // manipular promise, no caso de sucesso se usa o then
// userPromise
// .then(function(usuario){
//     return getTelephone(usuario.id)
//     .then(function solveTelphone(result){
//         return {
//             usuario: {
//                 nome: usuario.nome,
//                 id: usuario.id
//             },
//             telefone: result
//         }
//     })
// })
// .then(function(result){
//     const addres = getAddressAsync(result.usuario.id)
//     return addres.then(function solveAddress(resultAddress){
//         return {
//             usuario: result.usuario,
//             telefone: result.telefone,
//             endereco: resultAddress
//         }
//     });
// })
// .then((result) => {
//     console.log(`
//         Nome: ${result.usuario.nome}
//         Telefone: (${result.telefone.ddd}) ${result.telefone.telefone}
//         Rua: ${result.endereco.rua}, ${result.endereco.numero}
//     `)
// }).catch(function(error){
//     console.error('error na promise ', error)
// })