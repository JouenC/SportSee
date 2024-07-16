// react
import { NavLink } from "react-router-dom";

// assets
import Meditation from "../assets/meditation.svg";
import Bike from "../assets/velo.svg";
import Natation from "../assets/natation.svg";
import Altere from "../assets/altere.svg";

function NavBar () {
    return (
        <div className="slide">
            <nav className="slide__nav">
                <NavLink to="#" className="slide__nav__link meditation">
                    <img src={Meditation} alt="Meditation" />
                </NavLink>
                <NavLink to="#" className="slide__nav__link natation">
                    <img src={Natation} alt="Swiming" />
                </NavLink>
                <NavLink to="#" className="slide__nav__link bike">
                    <img src={Bike} alt="Bike" />
                </NavLink>
                <NavLink to="#" className="slide__nav__link altere">
                    <img src={Altere} alt="Dumb-Bell" />    
                </NavLink>
            </nav>
            <footer className="slide__footer">Copyright, SportSee 2020</footer>
        </div>
    )
}

export default NavBar