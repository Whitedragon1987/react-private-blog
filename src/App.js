import React, { useState } from 'react';
import {Switch, Route,} from "react-router-dom";
import './App.css';
import TopMenu from "./data/components/TopMenu";
import PrivateRouting from "./data/components/PrivateRouting"
import HomePage from "./pages/homepage";
import Login from './pages/login';
import Blogoverzicht from "./pages/blogoverzicht";
import Blogpost from "./pages/blogpost";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
        <TopMenu isAuthenticated={isAuthenticated}/>
        <Switch >
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/login">
                <Login isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
            </Route>

            <Route exact path="/blogview">
                {isAuthenticated ? <Blogoverzicht isAuthenticated={isAuthenticated}/>: <PrivateRouting/>}
            </Route>

            <Route exact path="/blogpost/:id">
                {isAuthenticated ? <Blogpost isAuthenticated={isAuthenticated}/>: <PrivateRouting/>}
            </Route>
        </Switch>
      </>
  );
}

export default App;
