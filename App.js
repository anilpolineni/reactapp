import React from 'react';
import './App.css';
import resume from './profile';
import Data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/resume" component={resume} />
    <Route exact path="/profile" component={Home} />
    </BrowserRouter>
  )
}
let Home=()=>{
  var info=Data.profiles;
  return (
  <section className="parent">
    {info.map((i,index)=>(
      <div className="card" key={index}>
        <div clallName="card-top">
        <h2>{i.basicInfo.name} </h2> <br/>
        <h4><em>{i.basicInfo.role}</em></h4>
        </div>

        <div className="card-bottom">

          <a href={"mailto:"+i.basicInfo.email} className="link">{i.basicInfo.email}  </a><br />

          <a href={"tel:"+i.basicInfo.mobileno} className="link">{i.basicInfo.mobileno}</a><br />

          <Link to={{pathname:"/resume",data:{id:index}}} className="link">View Profile>> </Link>
        </div>
      </div>
    ))}
  </section>

  )
}

export default App;
