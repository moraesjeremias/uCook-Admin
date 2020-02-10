import React from 'react';
import './styles.css';
import Box from '../../assets/undraw_gift_box_byy3.svg'


const TopContent = () => {
    return <section className="top content section">
        <div className="top-content">
            <h1 className="topic">Cadastro de Itens</h1>
            <img className="box-gift" src={Box} alt=""/>
        </div>
    </section>
};

export default TopContent;
