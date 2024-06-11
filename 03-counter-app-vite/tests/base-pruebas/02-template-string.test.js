const { getSaludo } = require("../../src/base-pruebas/02-template-string");


describe('Pruebas en 02-template-string', () => {
  
  test('getSaludo debe retornar un "Hola Noel', () => {
    const name = 'Noel';
    const message = getSaludo(name)

    expect ( message ).toBe( `Hola ${name}` )

  });

});
