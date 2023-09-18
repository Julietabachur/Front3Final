import { useState } from 'react'
import { RiAlertFill,RiCheckboxCircleLine } from 'react-icons/ri';

const FormWeb = () => {

const [user, setUser] = useState({
    nombre:"",    
    email:"",
})

const [show, setShow] = useState(false)
const [error, setError] = useState(false) 

const handleNameChange = (event) => setUser({...user, nombre: event.target.value})
const handleEmailChange = (event) => setUser({...user, email: event.target.value})


const handleSubmit = (event) => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(user.nombre.length > 5 && user.email.match(emailRegex)){
        console.log(user.email.match(emailRegex));        
        console.log(user)  
        setShow(true)
        setError(false)
    } else {
        setShow(false)
        setError(true)
    }
}
    
    return (
        <div className='d-flex flex-column justify-content-center align-items-center flex-wrap contact-grid'>
            <div className='my-3 pb-5'>

                {show && 

                    <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
                        <RiCheckboxCircleLine className='text-success' size={70}/>
                        <h3 style={{color: 'green'}}>Gracias {user.nombre}, te contactaremos cuanto antes vía email</h3>
                    </div>
                }

                {error && 

                    <div className='d-flex flex-column justify-content-center align-items-center flex-wrap'>
                        <RiAlertFill className='text-danger' size={70}/>
                        <h6 className='text-danger fs-4'>Por favor verifique su información nuevamente</h6>
                    </div>
                }
            </div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column justify-content-start'>          
                    <label htmlFor="name" className="form-label text-start">Nombre completo</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.nombre} placeholder="Juan Perez" onChange={handleNameChange}></input>
                </div>
                <div className='d-flex flex-column justify-content-start my-3'>
                    <label htmlFor="email" className="form-label text-start">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={handleEmailChange} placeholder="nombre@ejemplo.com"/>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
            
        </div>
    )
}


export default FormWeb


