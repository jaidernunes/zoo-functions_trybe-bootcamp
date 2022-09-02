const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('verifica se ao não receber nenhum parâmetro a função retorna o objeto esperado', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 } });
  });

  it('verifica se ao receber os param \'Monday\', \'09:00-AM\') retorna \'The zoo is closed\'', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('verifica se ao receber os param \'Tuesday\', \'09:00-AM\') retorna \'The zoo is open\'', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('verifica se recebe erro ao colocar uma segunda string inválida', () => {
    expect(() => (getOpeningHours('Monday', 'a9-00-AM'))).toThrow('The hour should represent a number');
  });

  it('verifica se recebe erro ao não receber AM ou PM no segundo parâmetro', () => {
    expect(() => (getOpeningHours('Tuesday', '09:00-ZZ'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('verifica se recebe erro ao receber horas inválidas', () => {
    expect(() => (getOpeningHours('Tuesday', '40:00-AM'))).toThrow('The hour must be between 0 and 12');
  });

  it('verifica se recebe erro ao receber minutos inválidos', () => {
    expect(() => (getOpeningHours('Tuesday', '10:61-AM'))).toThrow('The minutes must be between 0 and 59');
  });

  it('verifica se recebe erro ao receber um dia inválido', () => {
    expect(() => (getOpeningHours('Noday', '09:00-AM'))).toThrow('The day must be valid. Example: Monday');
  });

  // it('', () => {
  //   expect().toEqual();
  // });

  // it('', () => {
  //   expect().toEqual();
  // });

  // it('', () => {
  //   expect().toEqual();
  // });

  // it('', () => {
  //   expect().toEqual();
  // });
});
