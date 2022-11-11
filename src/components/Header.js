import logo from '../images/logo.png'
import { Link } from "react-router-dom"
// import Cats from "../pages/Cats"
// import Appa from "../pages/Appa"
// import CatWeek from "../pages/CatWeek"


const Header = () => {
    
    return (
        <>
            <header>
                <img src={logo} alt="Cats4LYF Logo - text with a cat paw background"/>

                <div className="heroRight">
                    <div className="heroContact">
                        kittykat@cats4lyf.cat | 07700 001 0101 | Registered Charity: 0934636291
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/cats">Cats</Link>
                        <Link to="/appa">Appa</Link>

                    </nav>

                </div>
            </header>

        </>

    )
}

export default Header
