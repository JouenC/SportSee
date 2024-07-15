import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

function Header () {
    return (
      <nav className='navbar'>
        <img src={logo} alt='sportSee' className='navbar__logo' aria-label='logo sportSee'/>
        <div className='navbar__link'>
          <NavLink to="/" className= "navbar__link__accueil"> Accueil </NavLink>
          <NavLink to="#" className= "navbar__link__profil"> Profil </NavLink>
          <NavLink to="#" className= "navbar__link__reglages"> Réglages </NavLink>
          <NavLink to="#" className= "navbar__link__communaute"> Communauté </NavLink>
        </div>
      </nav>
  )
}

export default Header