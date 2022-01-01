/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

//  const average = (array) => {
// //   if (array.length === 0) return undefined;
// //   for (let index = 0; index < array.length; index += 1) {
// //     if (typeof array[index] !== 'number') return undefined;
// //   }
// //   return Math.round(array.reduce((y, x) => y + x) / array.length);
// // };

// // module.exports = average;

// A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.

// arrVariable = [2, 3, 4, 6, 7];
// arrtest = ['11', 3, 0];
// arrtest2 = [];
// function average(arrVariable) {
// for let media = i; i < arrVariable.length; i +=
// }

const average = (arr) => {
  let newArray = 0;
  if (typeof arr !== 'number' || arr.length === 0) return undefined;

}

arr.reduce((a, b) => a + b, 0) / arr.length

module.exports = average;