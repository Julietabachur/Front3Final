import React from 'react'
import { useGlobal } from '../Context/Context'
import Card from '../Complements/Card'

const Favs = () => {

  const {state} = useGlobal()
  
return (
  <div className='d-flex flex-column justify-content-center flex-wrap mt-5'>
    <h1>Favorites</h1>
    <div className='d-flex flex-row justify-content-center align-items-center flex-wrap container-fluid card-grid  mt-3'>
      {state.favs.length == 0 ?  <h2>Todavía no tenés favoritos...</h2> : state.favs.map(fav => <Card dentista={fav} key={fav.id}/>) }
    </div>
      
  </div>
)
}

export default Favs