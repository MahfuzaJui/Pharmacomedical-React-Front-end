import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import Home from './Components/Admin/Home';
// import Contact from './Components/Contact';
// import Foot from './Components/Foot';
import ListView from './Components/Admin/ListView';
import JoinView from './Components/Admin/JoinView';
import ItemlistView from './Components/Admin/ItemlistView';
import ApplistView from './Components/Admin/ApplistView';
import UnverifiedView from './Components/Admin/UnverifiedView';
import DocReviewsView from './Components/Admin/DocReviewsView';
import ProfileAdminView from './Components/Admin/ProfileAdmin';
import EditUserView from './Components/Admin/EditUser';
import Login from './Components/Login';
import DeleteUserView from './Components/Admin/DeleteUserView';
import AddUserView from './Components/Admin/AddUserView';
import AddAppView from './Components/Admin/AddAppView';
import EditAppView from './Components/Admin/EditAppView';
import DeleteAppView from './Components/Admin/DeleteAppView';
import DeleteReviewView from './Components/Admin/DeleteReviewView';
import DeclineView from './Components/Admin/DeclineView';
import AcceptView from './Components/Admin/AcceptView';
import BanView from './Components/Admin/BanView';
import UnbanView from './Components/Admin/UnbanView';
// import Chart from './Components/Admin/Chart';
import Register from './Components/Register';

import { render } from "react-dom";

//import { Chart } from "./Chart";

const rootElement = document.getElementById("root");
// render(<Chart />, rootElement);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const user =localStorage.getItem('userData')
console.log(user)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Routes>
   {/*  */}
        <Route exact path='/ListView' element={<ListView/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/JoinView' element={<JoinView/>} />
        <Route exact path='/ItemlistView' element={<ItemlistView/>} />
        <Route exact path='/ApplistView' element={<ApplistView/>} />
        <Route exact path='/UnverifiedView' element={<UnverifiedView/>} />
        <Route exact path='/DocReviewsView' element={<DocReviewsView/>} />
        <Route exact path='/ProfileAdminView' element={<ProfileAdminView/>}/>
        <Route exact path='/EditUser/:userID' element={<EditUserView/>} />
        <Route exact path='/DeleteUserView/:userID' element={<DeleteUserView/>} />
        <Route exact path='/AddUserView' element={<AddUserView/>} />
        <Route exact path='/AddAppView' element={<AddAppView/>} />
        <Route exact path='/EditAppView/:appID' element={<EditAppView/>} />
        <Route exact path='/DeleteAppView/:appID' element={<DeleteAppView/>} />
        <Route exact path='/DeleteReviewView/:doctorReviewID' element={<DeleteReviewView/>} />
        <Route exact path='/DeclineView/:userID' element={<DeclineView/>} />
        <Route exact path='/AcceptView/:userID' element={<AcceptView/>} />
        <Route exact path='/BanView/:userID' element={<BanView/>} />
        <Route exact path='/UnbanView/:userID' element={<UnbanView/>} />
        {/* <Route exact path='/Chart' element={<Chart/>} /> */}
        <Route exact path='/registration' element={<Register/>} />
        
        <Route exact path='/login' element={<Login/>} />
        
      </Routes>
     
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();