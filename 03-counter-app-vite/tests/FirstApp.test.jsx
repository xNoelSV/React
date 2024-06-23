/**
* @jest-environment jsdom
*/

const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en <FirstApp />', () => {
  
  test('Debe de hacer match con el snapshot', () => {
    
    const title = 'Hola, soy Noel'
    render( <FirstApp title={ title } /> )

  })
  
})
