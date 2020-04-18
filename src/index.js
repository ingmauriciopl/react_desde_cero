import React from 'react';
import ReactDOM from 'react-dom';
// componentes
import App from './App';


const element = <React.StrictMode>
                    <App />
                </React.StrictMode>   ;
const root = document.getElementById('root');

ReactDOM.render(element,root);



