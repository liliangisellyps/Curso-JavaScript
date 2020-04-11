// 4.1 Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
        }
   };

const { nome, endereco : {cidade : cidade}, endereco : {estado : estado} } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros
/* const usuario = {
    name : 'Lilian',
    idade : 17,
}; */ 
const usuario = { name: 'Diego', idade: 23 };
const { name, idade } = usuario;
function mostraInfo(usuario) {
    return `${name} tem ${idade} anos.`;
}
const bb = mostraInfo(usuario);
console.log(bb);
