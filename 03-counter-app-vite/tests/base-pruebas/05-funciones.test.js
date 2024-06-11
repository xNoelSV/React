const { getUser, getUsuarioActivo } = require("../../src/base-pruebas/05-funciones")

describe('Pruebas en 05-funciones.test', () => {

  test('getUser debe de retornar un objeto', () => {
    
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect( testUser ).toEqual( user )

  })
  
  test('getUsuarioActivo debe retornar un objeto', () => {

    const name = 'Noel';

    /* const testActiveUser = {
      uid: 'ABC567',
      username: name
    } */

    const usuario = getUsuarioActivo( name );

    /* expect( testActiveUser ).toEqual( usuario ); */

    expect ( usuario ).toStrictEqual({
      uid: 'ABC567',
      username: name
    })

  })
  
  
})
