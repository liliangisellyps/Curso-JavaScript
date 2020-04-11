// converta as funções nos seguintes trechos de código em Arrow functions
// 3.1
const arr = [1, 2, 3, 4, 5];
/* const newArr = arr.map(function(item) {
 return item + 10;
}); */
const newArr = arr.map(item => item+10);
console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
/*
function mostraIdade(usuario) {
 return usuario.idade;
}
const id = mostraIdade(usuario);
console.log(id); */
const id2 =  usuario => usuario.idade;

console.log(id2(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;/* 
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); */

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
/* const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   } */

const promise = () => {
    return new Promise((resolve, reject) => resolve())
   }
console.log(promise());
   


