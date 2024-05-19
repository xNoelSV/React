import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  function handleAdd() {
    // setCounter( counter + 1 );
    setCounter( (c) => c + 1 )
  }
  
  /* function handleSubstract() {
    setCounter( counter - 1 );
    // setCounter( (c) => c - 1 )
  } */
  const handleSubstract = () => setCounter( counter - 1 );

  /* function handleReset() {
    setCounter( value );
    // setCounter( (c) => c = value )
  } */
  const handleReset = () => setCounter( value );

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubstract }> -1 </button>
      <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp
