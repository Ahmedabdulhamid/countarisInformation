import React from 'react'
import {Route,Routes}from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import { useSelector } from 'react-redux';
import Details from './Details';
import Link1 from './Link';
import Region from './Region';
const App = () => {
  const {mode}=useSelector((s)=>s.data)
  return (
    <div style={{background:mode===true?"white":"black"}}>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/countarydetail/:name'element={<Details/>}/>
        <Route path='/:nameLink'element={<Link1/>}/>
        <Route path='/conuteries/:region1'element={<Region/>}/>
      </Routes>
      
    </div>
  )
}

export default App

