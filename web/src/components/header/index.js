import React  from 'react';
import 'styles.css';
import ucookLogo from '../../assets/Asset-2.png';


const Header = () => {
    return <nav className="menu-nav">
        <div>
            <ucookLogo />
            <h2 className="title">uCook</h2>
        </div>
    </nav>
}



export default Header;