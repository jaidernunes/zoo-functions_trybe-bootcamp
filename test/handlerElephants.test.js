// const { internet } = require('faker/lib/locales/pt_BR');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna \'undefined\' se nenhum argumento for passado', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('retorna \'Parâmetro inválido, é necessário uma string\' se o parâmetro for um número', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('retorna \'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5\' se o argumento \'id\' for passado', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('retorna 4 se receber parâmetro o \'count\'', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('retorna um array com nomes se receber parâmetro o \'names\'', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna 10.5 se receber parâmetro o \'averageAge\'', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('retorna null se receber parâmetro o \'averageAge\'', () => {
    expect(handlerElephants('invalid')).toEqual(null);
  });
});
