import React,{useState , useEffect} from 'react'
import {useParams , Link} from "react-router-dom"
import arrow from "../../assets/arrow.svg"
import "./single.css"

function Single() {
const {name} = useParams()


const [data, setData] = useState({})
1


let country = `name/${name}`

let baseUrl = `https://restcountries.com/v2/${country}`

const fetchData = async () =>{
const request = await fetch(baseUrl)
const result = await request.json()
setData(...result)
}

useEffect(()=>{
fetchData()
},[])


console.log(data);



return (
<div className="single">
    <div className="container">
        <Link to={-1} className='back2'>
            <img src={arrow} alt="" />
            Back
        </Link>

        <div className="single-box">
            <div className="single-box-start">
                <img src={data.flag} className="single-img" width={"500px"} alt="" />
            </div>

            <div className="single-box-end">

                <div className="single-box-end-flexbox">

                    <div className="single-box-end-left">
                        <h2 className='single-box-end__name'>{data.name}</h2>
                        <p className='single-box-end__nativeName'><span>Native Name:</span> {data.nativeName}</p>
                        <p className='single-box-end__nativeName'><span>Population:</span> {data.population}</p>
                        <p className='single-box-end__nativeName'><span>Region:</span> {data.region}</p>
                        <p className='single-box-end__nativeName'><span>Capital:</span> {data.capital}</p>
                    </div>

                    <div className="single-box-end-right">
                         <p className='single-box-end__nativeName'><span>Top Level Domain: {data.topLevelDomain} </span>
                        </p> 
                        <p className='single-box-end__nativeName'><span>Currencies:</span>{data.currencies && (data?.currencies[0]?.name)}</p>
                        <p className='single-box-end__nativeName'><span>Languages:</span>{data.languages && (data?.languages[0].name)}</p> 
                    </div>



                </div>

            </div>

        </div>

    </div>
</div>
)
}

export default Single