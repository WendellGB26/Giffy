import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfGifs from './components/ListOfGif/Index';
import Home from './Pages/Home/Index'
import Logo from "./Logo.png"
import SearchGif from './Pages/SearchGif/Index';

import { Link, Route } from "wouter";
import GifInformation from './Pages/GifInformation/Index';
import StaticContext from './context/StaticContext';
import {GifContext} from './context/GifContext'


function App() {
  const [keyword,setKeyword] = useState ([])
  return (
    <StaticContext.Provider value = {
      {
        name: 'midudev',
      }
    }>
      <div className="App-content">
        <div>
          <Link to ="/">
            <img className="Logo" src={Logo}/>
          </Link>
        </div>
        <section className="App-link text-center">
          <GifContext>
            <Route 
              component={Home}
              path="/"
            />
            <Route 
              component={SearchGif}
              path="/gif/:keyword"
            />
            <Route
              component = {GifInformation}
              path = "/gif/gif/:id"
            />
          </GifContext>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
