console.log('Luioz otávio' && 0 && 'Maria');

console.log('Luioz otávio' && true && 'Maria');

console.log('Luioz otávio' && true && NaN);

/*
FALSY
*false
0
'' "" `` (vazio)
null/ undefined 
NAN
*/
/* 
console.log('Luiz' && 'Maria');


function falaOi() {
    return 'oi'
};


let vaiExecutar;

console.log(vaiExecutar && falaOi()); */


/* console.log (0 || null || 'Luiz Otávio' || true); */

const corUsuario = 'black';
const CorPadrao = corUsuario || 'red';

console.log(CorPadrao);

const A = 0;
const B = null;
const C = 'false';
const D = false;
const E = NaN;

console.log( A || B || C || D || E);