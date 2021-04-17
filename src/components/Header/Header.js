// import styles from './Header.css';
import './Header.css';
import React from "react";


const Header = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Вачугов Дмитрий</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default Header;