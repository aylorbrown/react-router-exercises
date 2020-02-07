import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const links = [
  '1', 
  '2',
  '3',
  '4',
  '5'
]

export default function App() {
  return (
    <Router>
      <div>
        <h1>This is a header!</h1>
        <ul>
        {links.map((text, i) => (<li key={i}><Link to={`/${i + 1}`}>{text}</Link></li>))}


        </ul>
    

    <Switch>
      <Route path="/1">
        <Home />
      </Route>

      <Route path="/2">
        <About />
      </Route>

      <Route path="/3">
        <Users />
      </Route>

      <Route path="/4">
        <Blog />
      </Route>

      <Route path="/5">
        <Work />
      </Route>

    </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function Blog() {
  return <h2>Blog</h2>
}

function Work() {
  return <h2>Work</h2>
}


