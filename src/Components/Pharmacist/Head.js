import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";
const Head = () => {
    return ( 
        <div className = "App-header" >  
        <nav>
          <ul>
        <li>
        <Link to = "/" > < b > Home </b></Link >
        </li>
        <li>
        <Link to = "/itemList" > < b > Pharmaceutical-Items </b></Link >
        </li>
        <li>
        <Link to = "/userList" > < b > Users </b></Link >
        </li>
        <li>
        <Link to = "/profile" > < b > Profile </b></Link >
        </li>
        <li>
        <Link to = "/createItem" > < b > Create-Item </b></Link >
        </li>
        <li>
        <Link to = "/registration" > < b > Registration </b></Link >
        </li>
        <li>
        <Link to = "/login" > < b > LogIn </b></Link >
        </li>
        <li>
        <Link to = "/signout" > < b > SignOut </b></Link >
        </li>
        </ul>
        </nav>
        </div>
    )
}
export default Head;