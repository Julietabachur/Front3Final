import React from 'react'
import { useGlobal } from '../Context/Context'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from '../../src/index.css'

const Card = ({dentista}) => {

  const {dispatch, state} = useGlobal()

  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: dentista})
  }

  const isDentistaInFavs = state.favs.some(favDentista => favDentista.id === dentista.id);
 
    
  return (
  
    <div className="card m-3" style={{width: '10rem', height:'15rem'}}>
      <Link to={'/detail/' + dentista.id} className='text-center'>
        <img src="images/dentista.png" className="card-img-top" alt="Dentista" style={{width: '8rem', height:'8rem'}}/>
        <div >
          <h5 className="fs-6">{dentista.name}</h5>
          <p className="card-text">{dentista.username}</p>
        </div>
      </Link>      
      <button className="favButton">{isDentistaInFavs ? <FaHeart className='text-danger fs-4'/> : <FaRegHeart className='text-danger fs-4' onClick={addFav}/>}</button>
      
      
    </div>
  
  
  
  )
}

export default Card