/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Testar se em `circle` retorne undefined, se parâmetro passado não seja um número', () => {
    expect(circle(Boolean, String)).toBeUndefined();
  });
  it('Testar se em `circle` retorne objeto', () => {
    expect(typeof circle(1)).toBe('object');
  });
  it(' Testar se no objeto consta propriedades: radius, area e cincumference', () => {
    expect(circle(7)).toHaveProperty('radius', 'area', 'circumference')
  });
  it('Testar `circle` se não receber nenhum parâmetro retorne undefined', () => {
    expect(circle()).toBeUndefined();
  });

  it('Testar se em`circle` retorne, dentro de um objeto, a circunferência correta para um círculo de raio 2', () => {
    expect(circle(2)).toHaveProperty('circumference', 12.56)
  });
  it('Testar em  `circle` retorne, dentro de um objeto, a área correta para um círculo de raio 3', () => {
    expect(circle(3).area).toBeCloseTo(28.26, 2)
  });
  it('Testar em `circle` funcao que retorna, num objeto, os dados corretos de um círculo de raio 3.', () => {
    expect(circle(3).radius).toBeCloseTo(3);
    expect(circle(3).area).toBeCloseTo(28.26, 2 );
    expect(circle(3).circumference).toBeCloseTo(18.84, 2);
  });
});

  /* refencias: 
  https://tableless.com.br/jasmine-entendendo-os-matchers/
  https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value 
  https://jestjs.io/pt-BR/docs/expect#tobeclosetonumber-numdigits
  https://stackoverflow.com/questions/45377153/jasmine-tobecloseto-what-is-second-parameter*/
