// react
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home () {
    const [state, setState] = useState(window.localStorage.getItem("origin"));
    const onSwitch = () => {
        const origin = window.localStorage.getItem("origin")
        let newOrigin = origin === "api"? "mocked" : "api"
        window.localStorage.setItem("origin", newOrigin)
        setState(newOrigin)
    }
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
            <div className="users__switch">
                <button className="users__switch__button" onClick={onSwitch} >{state}</button>
            </div>
        </div>
  )
}

export default Home