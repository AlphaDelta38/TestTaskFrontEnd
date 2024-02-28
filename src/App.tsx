import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componets/header";
import {IsAuthroutes} from "./routing/routes";
import {NoAuthroutes} from "./routing/routes";


function App() {
  return (
      <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    {NoAuthroutes.map((value, index, array)=><Route path={value.path} element={<value.element/>}></Route>)}
                </Routes>
            </BrowserRouter>
      </div>
  );
}

export default App;
