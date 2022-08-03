import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Head from './Components/Head';
import Home from './Components/Admin/Home';
// import Contact from './Components/Contact';
// import Foot from './Components/Foot';
import ListView from './Components/Admin/ListView';
import JoinView from './Components/Admin/JoinView';
import ItemlistView from './Components/Admin/ItemlistView';
import ApplistView from './Components/Admin/ApplistView';
import UnverifiedView from './Components/Admin/UnverifiedView';
import DocReviewsView from './Components/Admin/DocReviewsView';
import Login from './Components/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
      <Routes>
   {/*  */}
        <Route exact path='/ListView' element={<ListView/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/JoinView' element={<JoinView/>} />
        <Route exact path='/ItemlistView' element={<ItemlistView/>} />
        <Route exact path='/ApplistView' element={<ApplistView/>} />
        <Route exact path='/UnverifiedView' element={<UnverifiedView/>} />
        <Route exact path='/DocReviewsView' element={<DocReviewsView/>} />
        <Route exact path='/login' element={<Login/>} />
      </Routes>
     
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();