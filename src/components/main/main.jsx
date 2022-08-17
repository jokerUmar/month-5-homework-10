import React,{useState} from 'react'
import "./main.css"
import {NavLink , Link , useParams } from "react-router-dom"

function Main({data , setInputName , inputName}) {



    return (
     <div className="main">
        <div className="container">
        <div className="form">
            <input type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} placeholder='Search for a country…' />
            <NavLink to="/region">
            <button  className='regions-btn'>  
                Regions
            </button>   
            </NavLink>
        </div>
            <div className="box">

             {
                (data.length > 0 ) ?
                 
                data.map(i =>{
                    return  <div className="card">
                      <img src={i.flags.png} alt="" width={"267px"} height={"160px"} />

                      <Link to={`/single/${i.name}`} className='nav-link'>
                      <h4>{i.name}</h4>
                      </Link>

                      <p className='main-population'> Population: {i.population}</p>
                      <p className="main-region">Region: {i.region}</p>
                      <p className="main-capital">Capital: {i.capital}</p>

                    </div>

                  }) :
                  <h1 className='not-found'>not found</h1>
             }

            
            </div>
        </div>
     </div>   
    )
}

export default Main
