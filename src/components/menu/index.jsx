import {Link} from 'react-router-dom';

const Menu = () =>{
    return(
        <div id="menu">
            <h2>Ghibli</h2>
            <div className="links">
                <Link className="menu_link" to="/">Home</Link>
                <Link className="menu_link" to="/films">Films</Link>
                <Link className="menu_link" to="/collection">Collection</Link>
            </div>
           
        </div>
    )
}

export default Menu