import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Nav from './component/nav/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
