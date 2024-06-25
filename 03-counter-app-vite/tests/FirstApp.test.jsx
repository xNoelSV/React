/**
* @jest-environment jsdom
*/

const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {

  /* test('Debe de hacer match con el snapshot', () => {

    const title = 'Hola, soy Noel'
    const { container } = render( <FirstApp title={ title } /> )

    expect( container ).toMatchSnapshot();

  }) */

  test('Debe de mostrar el título en el H1', () => {
    
    const title = 'Hola, soy Noel'
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )

    expect( getByText(title) ).toBeTruthy();

    /* const h1 = container.querySelector('h1');
    console.log(h1.innerHTML)
    // expect(h1.innerHTML).toBe( title );
    expect(h1.innerHTML).toContain( title ); */

    //expect( getByTestId('test-title') ).toBeTruthy();
    expect( getByTestId('test-title').innerHTML ).toContain( title );

  })

  test('Debe de mostrar el subtitulo enviado por props', () => {
    
    const title = 'Hola, soy Noel'
    const subTitle = 'Soy un subtitulo'
    const { container, getByText, getByTestId, getAllByText } = render( 
      <FirstApp 
        title={ title } 
        subTitle={ subTitle }
      /> 
    )

    // expect( getByText(subTitle) ).toBeTruthy();
    expect( getAllByText(subTitle).length ).toBe(3);

  })
    

})
