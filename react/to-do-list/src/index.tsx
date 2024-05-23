import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Main from './Components/Main/Main';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//npx json-server -p 3500 -w data/db.json command to run json server.
root.render(
  <Main/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

