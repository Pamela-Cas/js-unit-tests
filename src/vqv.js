/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (myName, myAge) => {
  if (myName && myAge) {
    return `Oi, meu nome é ${myName}!
Tenho ${myAge} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined;
};
console.log(vqv('Pamela', '39'));
module.exports = vqv;
