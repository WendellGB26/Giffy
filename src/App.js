import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfGifs from './components/ListOfGif/ListOfGifs';
import Home from './Pages/Home/Index'
import Logo from "./Logo.png"
import SearchGif from './Pages/SearchGif/Index';

import { Link, Route } from "wouter";
import GifInformation from './Pages/GifInformation/Index';



function App() {
  const [keyword,setKeyword] = useState ([])
  return (
    <div className="App-content">
        <div>
        <Link to ="/">
        <img className="Logo" src={Logo}/>
        </Link>
        </div>
        <section className="App-link row text-center">
          <Route 
              component={Home}
              path="/"
          />
          <Route 
            component={SearchGif}
            path="/gif/:keyword"
          />
        </section>
    </div>
  );
}

export default App;
