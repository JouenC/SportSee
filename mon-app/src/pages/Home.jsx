import { NavLink } from "react-router-dom";

function Home () {
    return (
        <div className="users">
            <div>
                <h1 className="users__title">Utilisateurs</h1>
                <div>
                    <NavLink to="user/12" className="users__select"> Karl </NavLink>
                </div>
                <div>
                    <NavLink to="user/18" className="users__select"> Cecilia </NavLink>
                </div>
            </div>
        </div>
  )
}

export default Home