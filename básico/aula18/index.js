/* function criaPessoa(nome,sobrenome,idade){
    return{  nome:nome,sobrenome,idade };
}; //fabrica de objetos

const pessoa1 = criaPessoa('Luiz','Otávio',25);
const pessoa2 = criaPessoa('Maria','Oliveira',32);
const pessoa3 = criaPessoa('João','Moreira',55);

console.log(pessoa1.nome,pessoa2.nome);*/

const pessoa1 ={
    nome:'Luiz',
    sobrenome:'Miranda',
    idade:25,

    fala(){
        console.log(`a minha idade atual é ${this.idade}. `);
    },
    incrementarIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementarIdade();
pessoa1.fala();

pessoa1.incrementarIdade();
pessoa1.fala();

pessoa1.incrementarIdade();
pessoa1.fala();