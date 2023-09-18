import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../Context/Context'
import   '../../src/index.css'
import   '../../src/App.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
  
  const {dispatch, state} = useGlobal();

  
  const {theme} = state;
  const cambioTema = theme ? 'light' : 'dark';
  const btnTheme = 'btn rounded '+ cambioTema
  const opNav = 'mx-3 '+ cambioTema
  

  const cambioTheme=() => { 
    dispatch({type: 'SWITCH_THEME'});

  };

  return (
    <nav className={cambioTema}>
      <div className='d-flex flex-row justify-content-around container-fluid align-items-center'>        
        <div  className='fs-4'>
          <span className='text-danger'>D</span>H ODONTO
        </div>
        <div>        
          <Link className={opNav} to = '/'><span>Home</span></Link>
          <Link className={opNav} to = '/contact'>Contact</Link>
          <Link className={opNav} to = '/favs'>Favs</Link>
          <button className={btnTheme} onClick={cambioTheme}>{theme ? < MdDarkMode className='text-black' size={30}/> : <MdLightMode className='text-warning' size={30}/>}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar