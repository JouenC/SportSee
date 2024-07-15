import { NavLink } from "react-router-dom";

function Home () {
    return (
        <nav className="users">
            <h1 className="users__title">Utilisateurs</h1>
            <NavLink to="user/12" className="users__select"> Karl </NavLink>
            <NavLink to="user/18" className="users__select"> Cecilia </NavLink>
        </nav>
  )
}

export default Home