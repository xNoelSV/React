/**
* @jest-environment jsdom
*/

const { render, screen } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en <FirstApp /> 2', () => {

  const title = 'Hola, soy Noel';
  const subTitle = 'Soy un subtitulo';

  test('Debe de hacer match con el snapshot', () => {
    
    const { container } = render( <FirstApp title={title} /> )
    expect( container ).toMatchSnapshot();

  })

  test('Debe de mostrar el mensale "Hola, soy Noel"', () => {

    render( <FirstApp title={ title }/> );
    screen.debug();
    expect( screen.getByText(title) ).toBeTruthy();

  }) 
  
  test('Debe de mostrar el título en un h1', () => {
    
    render( <FirstApp title={ title }/> );
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

  })

  test('Debe de mostrar el subtitulo enviado por props', () => {
    
    render( 
      <FirstApp
        title={ title }
        subTitle={ subTitle }
      />
    )

    expect( screen.getAllByText(subTitle).length ).toBe(3);

  })

})
