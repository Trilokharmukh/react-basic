import React from "react";
import {Link} from "react-router-dom"


export default function Login(){
  return(
    <>
      <span>Enter Your Name
      </span>
      <input type="text" placeholder="Name"/><br/>
      <Link to="/Content"><input type="submit"/></Link>
      

    </>

  )

}