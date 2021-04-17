// import styles from './PostAddForm.css';
import './PostAddForm.css';
import React from "react";


const PostAddForm = ({onAdd}) => {
    return (
        <div className='bottom-panel d-flex'>
            <input className='form-control new-post-label'
                   type="text" placeholder='О чем думаешь?'/>
            <button className='btn btn-outline-secondary' type='submit'
            onClick={()=> onAdd('csscascascascasc')}>Добавить</button>
        </div>
    )
}

export default PostAddForm;