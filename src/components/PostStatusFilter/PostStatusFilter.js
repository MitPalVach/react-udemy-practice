// import styles from './PostStatusFilter.css';
import './PostStatusFilter.css';
import React from "react";
import { Button } from 'reactstrap';


const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <Button outline color='info'>Все</Button>
            <button className='btn btn-info' type='button'>Все</button>
            <button className='btn btn-outline-secondary' type='button'>Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;