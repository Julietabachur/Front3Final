import React from 'react'
import { useGlobal } from '../Context/Context'
import   '../../src/App.css'
import   '../../src/index.css'
import { FiArrowUp } from "react-icons/fi";
import { AiFillFacebook,AiFillInstagram  } from "react-icons/ai";
import { FaTiktok, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const {state} = useGlobal();

  const {theme} = state;
  const cambioTema = theme ? 'light' : 'dark';
  const styles= cambioTema + ' d-flex flex-column '
  const styleLogo= cambioTema + ' logo'
  const styleRedes= cambioTema + ' img'


  return (
    <footer className={styles}>
      <div className='bg-danger text-white fw-semibold'>VOLVER <FiArrowUp className='text-white'/></div>
      <div className=' d-flex flex-row justify-content-between container-fluid align-items-center w-75'>        
        <img className='logo' src="./images/DH.png" alt='DH-logo' />
        <div className='d-flex flex-row justify-content-between align-items-center p-5'>   
          <AiFillFacebook className=' mx-2' size={50}/>
          <AiFillInstagram className=' mx-2' size={50}/>
          <FaTiktok className=' mx-2' size={50}/>
          <FaWhatsappSquare className=' mx-2' size={50}/>
        </div>
      </div>
      
        
        
    </footer>
  )
}

export default Footer