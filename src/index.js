import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";

function WhoAmI(props) {
    return (
        <>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

