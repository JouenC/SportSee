// react
import { NavLink } from "react-router-dom";

// asset
import logo from '../assets/logo.svg';

function Header () {
    return (
      <nav className='navhead'>
        <img src={logo} alt='sportSee' className='navhead__logo' aria-label='logo sportSee'/>
        <div className='navhead__link'>
          <NavLink to="/" className= "navhead__link__accueil"> Accueil </NavLink>
          <NavLink to="#" className= "navhead__link__profil"> Profil </NavLink>
          <NavLink to="#" className= "navhead__link__reglages"> Réglages </NavLink>
          <NavLink to="#" className= "navhead__link__communaute"> Communauté </NavLink>
        </div>
      </nav>
  )
}

export default Header