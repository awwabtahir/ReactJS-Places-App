import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const placeList = [
    {id: "1", name: "Rawalpindi", state: "Punjab"}, 
    {id: "2", name: "Islamabad", state: "Federal"}, 
    {id: "3", name: "Karachi", state: "Sindh"},
];

ReactDOM.render(
    <App places={placeList} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
