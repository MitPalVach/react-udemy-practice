import './PostAddForm.css';
import React from "react";


const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input className='form-control new-post-label'
                   type="text" placeholder='О чем думаешь?'/>
            <button className='btn btn-outline-secondary' type='submit'>Добавить</button>
        </form>
    )
}

export default PostAddForm;