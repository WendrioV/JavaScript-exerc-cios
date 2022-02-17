/*primitivos( imutáveis) - string,number,boolean, undefined, null (bigint, symbol) - valor 

referência (mutável) - array, object, function - passados por referência
*/

const a = {
    nome:'Luiz',
    sobrenome:'Otávio'
};

const b = {...a}; //spread

a.nome= 'João'
console.log(a);
console.log(b);


/* let a = [1,2,3];
let b = [...a];
let c = b;

console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

console.log(c); */

/* let nome = 'Luiz';
nome[0] = 'R';

console.log(nome[0],nome);

let a = 'A';
let b = a; // cópia

console.log(a,b);

a= 'outra coisa';

console.log(a,b); */