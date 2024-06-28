const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require('../src/CounterApp');

describe('Pruebas en <CounterApp />', () => {
  
  const value = 20;

  test('Debe de hacer match con el snapshot', () => {
    
    const { container } = render( <CounterApp value={value} />)
    expect( container ).toMatchSnapshot();

  })

  test('Debe de tener un valor inicial de 20 en <CounterApp value=100 />', () => {

    render( <CounterApp value={value} />)
    expect( screen.getByText(value)).toBeTruthy();

  }) 

  test('Debe de incrementar con el botón +1', () => {
    
    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('+1') );
    expect( screen.getByText('21') ).toBeTruthy();

  })

  test('Debe de incrementar con el botón -1', () => {
    
    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('-1') );
    expect( screen.getByText('19') ).toBeTruthy();

  })
  
  test('Debe de funcionar el botón de reset', () => {

    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    //fireEvent.click( screen.getByText('Reset') );
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset'} ) );

    expect( screen.getByText(`${value}`) ).toBeTruthy();
    
  })
  
  
})
