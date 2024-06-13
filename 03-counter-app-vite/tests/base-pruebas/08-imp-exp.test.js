const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");

describe('Pruebas en 08-imp-exp', () => {
  
  test('getHeroeById debe retornar un héroe por ID', () => {
    
    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

  })

  test('getHeroeById debe retornar undefined si no existe', () => {
    
    const id = 10;
    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy();

  })

  // Tarea: getHeroesByOwner();
  // Debe retornar un arreglo con héroes de DC
  // length === 3
  // toEqual al arrego filtrado
  test('Filtrar por héroes de DC, tamaño 3', () => {

    const owner = 'DC'
    const heroes = getHeroesByOwner( owner );
    expect( heroes.length ).toBe( 3 );
    expect( heroes ).toEqual( getHeroesByOwner(owner) );

  })
  
  // Debe retornar un arreglo con los héroes de Marvel
  // length === 2
  test('Filtrar por héroes de Marvel, tamaño 2', () => {

    const owner = 'Marvel'
    const heroes = getHeroesByOwner( owner );
    expect( heroes.length ).toBe( 2 );
    expect ( heroes ).toEqual( getHeroesByOwner(owner) );

  })

})
