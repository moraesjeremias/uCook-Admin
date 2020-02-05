import React  from 'react';
import './styles.css';
import ucookLogo from '../../assets/Asset-2.png';


const Header = () => {
    return <nav className="menu-nav">
        <div className="brand">
            <img className="logo" src={ucookLogo} alt="uCook brand logo"/>
            <h2 className="title">uCook</h2>
        </div>
        <div className="entry">
            <p>Cadastro</p>
        </div>
    </nav>
}

export default Header;