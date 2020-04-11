const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//2.1 utilizar o map parar pegar a idade de todos os usuarios
const idade = usuarios.map(usuarios => usuarios.idade);/* 

function PegarIdade(usuario){
    return usuario.idade;
} */

console.log(idade);

//2.2 utilizar o filter; usuarios +18 e trabalham na rocketseat

function check(usuarios){
    return (usuarios.idade >= 18 && usuarios.empresa == 'Rocketseat')
}

var filtered = usuarios.filter(check);
console.log(filtered);

//2.3 utilizar o find p achar usuario q trabalhe na empresa google

const found = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(found);

//2.4 multiplique a idade de todos os usuarios por 2 e dps
// realize um filtro nos usuarios que possuem no maximo 50 anos

const dobroIdade = usuarios.map(dobrarIdade);

function dobrarIdade(usuarios){
    usuarios.idade = usuarios.idade * 2;
    return usuarios;
}
const filtradoh = dobroIdade.filter(usuario => (usuario.idade <= 50));
console.log(filtradoh);