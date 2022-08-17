import React,{ useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Region from './components/region/region'
import Single from './components/singleItem/single'
import {Routes , Route} from "react-router-dom"
function App() {

const [data, setData] = useState([])

const [inputName, setInputName] = useState("");

let name = `name/${inputName}`

let baseUrl = `https://restcountries.com/v2/${(inputName.trim().length==0) ? "all" : name}`

const fetchData = async () =>{
const request = await fetch(baseUrl)
const result = await request.json()
setData(result)
}

useEffect(()=>{
fetchData()
},[inputName])







return (
<div className="App">
    <Navbar />
  <Routes>
    <Route path='/' element={<Main data={data} setInputName={setInputName} inputName={inputName}></Main>} />
    <Route path='/region' element={<Region data={data} />} />
    <Route path='/single/:name' element={<Single/>} />
  </Routes>



</div>
)
}

export default App