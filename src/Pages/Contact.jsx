import React from 'react'
import FormWeb from '../Complements/FormWeb'

const Contact = () => {
  return (
      <div className='d-flex flex-column justify-content-center align-items-center flex-wrap mt-5 contact-grid'>
        <h2>¿Querés saber más?</h2>
        <p>Dejanos tus datos y nos pondremos en contacto con vos.</p>
        <FormWeb/>
      </div>
  )
}

export default Contact