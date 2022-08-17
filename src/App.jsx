import React,{ useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Region from './components/region/region'
import Single from './components/singleItem/single'
import Loader from './components/loader/loader'
import {Routes , Route} from "react-router-dom"
function App() {

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)


const [inputName, setInputName] = useState("");

let name = `name/${inputName}`

let baseUrl = `https://restcountries.com/v2/${(inputName.trim().length==0) ? "all" : name}`

const fetchData = async () =>{
setLoading(false)
const request = await fetch(baseUrl)
const result = await request.json()
setLoading(true)
setData(result)
}

useEffect(()=>{
fetchData()
},[inputName])




return (
<div className="App">
  <Navbar />
  <Routes>
    <Route path='/' element={loading ? <Main data={data} setInputName={setInputName} inputName={inputName}>
      </Main> : <Loader/>} />
      <Route path='/region' element={<Region data={data} loading={loading} setLoading={setLoading} />} />
      <Route path='/single/:name' element={<Single  />} />
  </Routes>



</div>
)
}

export default App