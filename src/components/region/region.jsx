import React,{ useState , useEffect } from 'react'
import "./region.css"
import {NavLink  , Link} from "react-router-dom"

function Region({data}) {

let regionArr = []

data.map(i => {
if (!regionArr.includes(i.region)){
regionArr.push(i.region)
}
});

console.log(regionArr);


const [regionData, setRegionData] = useState([])

const [selectname, setSelectName] = useState("Asia");



let regionName = `region/${selectname}`

let regionUrl = `https://restcountries.com/v2/${regionName}`

const fetchData = async () =>{
const request = await fetch(regionUrl)
const result = await request.json()
setRegionData(result)
}

useEffect(()=>{
fetchData()
},[selectname])


return (
<div className='main'>
    <div className="container">
        <div className="box-region">
            <select className='region-select' onChange={(e)=>{setSelectName(e.target.value)}} name="" id="">
                {
                regionArr.map(i=>{
                return <option value={i}>{i}</option>
                })
                }
            </select>
            
            <NavLink to="/" className='nav-link'>
                <button className='back'>back</button>
            </NavLink>

        </div>
        <div className="box">
            {
            (regionData.length > 0) ?
            regionData.map(item =>{
            return <div className="card">
                <img src={item.flags.png} alt="" width={"267px"} height={"160px"} />
                <Link to={`/single/${item.name}`} className='nav-link'>
                <h4>{item.name}</h4>
                </Link>
                <p className='main-population'> Population: {item.population}</p>
                <p className="main-region">Region: {item.region}</p>
                <p className="main-capital">Capital: {item.capital}</p>
            </div>

            }) : <h1 className='not-found'>not found</h1>
            }
        </div>

    </div>
</div>
)
}

export default Region