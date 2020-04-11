// 5.1 rest
//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma(...numbers){
    let result = 0;
    for(const number of numbers){
        result += number;
    }
    return result;
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 spread
/* Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
 */
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
const usuario2 = {...usuario};
usuario2.nome = 'Gabriel'
const usuario3 = {...usuario};
usuario2.endereco.cidade = 'Lontras';

console.log(usuario2);
console.log(usuario3);

   
