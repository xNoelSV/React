// FORMA 1
/* export function App () { 
  
  // document.createElement(...)
  return (<h1>Hola mundo</h1>);

} */

// FORMA 2
/* import React from 'react'

const HelloWorldApp = () => {
  return (
    <h1>
      HelloWorldApp
    </h1>
  )
}

export default HelloWorldApp */

// FORMA 3
export const HelloWorldApp = () => {
  return ( 
    <h1>Hollo World App</h1>
  );
}