const alunos = ['Luiz','Maria','João'];

alunos.push('Luiza')
alunos.push('Eduardo')

console.log(alunos.slice(0,3))

delete alunos[1]; // deleta deixando vazio um espaço do array
console.log(alunos);

alunos.shift(); //remove no começo
const removido = alunos.pop(); // remove no fim
console.log(removido);


//alunos.unshift('Luiza'); adiciona no começo
//alunos.unshift('Fábio');

//alunos.push('Luiza'); adiciona no fim
//alunos.push('Fábio');

//alunos[alunos.length] = 'Luiza'; adiciona no fim
//alunos[alunos.length] = 'Fábio';
//alunos[alunos.length] = 'Luana';
console.log(alunos);

//alunos[0] = 'Eduardo'; altera
//console.log(alunos[0]);

