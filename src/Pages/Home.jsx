import React from 'react'
import Card from '../Complements/Card'
import { useGlobal } from '../Context/Context'
import styles from '../../src/index.css'

const Home = () => {

const { state } = useGlobal()

return (
    <div className='d-flex flex-column justify-content-center flex-wrap mt-5'>
      <h1>Home</h1>
      <div className='d-flex flex-row justify-content-center align-items-center flex-wrap container-fluid card-grid mt-3'>
      {state.dentistas.map(dentista => <Card dentista ={dentista} key ={dentista.id}/>)}
      </div>
      
    </div>
  )
} 
export default Home