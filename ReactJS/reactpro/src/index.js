import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Element(){
//   return <div><h1>Hello Reactjs</h1><h2>Welcome</h2></div>
//   // return React.createElement('h1',{className:'abc'},'Hello react-js')
// }

// root.render(
//   <React.StrictMode>
//     {/* <App></App> */}
//     <App />
//     {/* <Element/> */}
//   </React.StrictMode>
// );

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
