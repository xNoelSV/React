/* import { Fragment } from "react" */
import PropTypes from 'prop-types'

/* const newMessage = 'Noel'; */

function getMessage() {
  return 'getMessage'
}

const newMessage = {
  message: 'Hola mundo',
  title: 'Noel'
}

const FirstApp = ({ title, subTitle }) => {  
  return (
    <>
      {/* <h1>{ getMessage() }</h1> */}
      {/* <h1>{ newMessage.title }</h1> */}
      {/* <code> { JSON.stringify(newMessage) }</code> */}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}

export default FirstApp
