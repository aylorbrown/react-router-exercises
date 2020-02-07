import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the React Router Demo!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
    

    <Switch>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/users">
        <Users />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/work">
        <Work />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}


  function Home() {
    return (
      <h2>Home</h2>
    )
  }
  
  function About() {
    return (
      <h2>About</h2>
    )
  }
  
  function Users() {
    return (
      <h2>Users</h2>
    )
  }
  
  function Blog() {
    return (
      <h2>Blog</h2>
    )
  }
  
  function Work() {
    return (
      <h2>Work</h2>
    ) 
  }


