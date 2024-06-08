import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/navbar'
import './App.css'
import { Home } from "./pages/home"
import { Auth } from "./pages/auth"
import { Movie } from "./pages/movie"
import { Rated } from "./pages/rated"
// import { Friends } from "./pages/friends"

// const Home = () => <div>Home</div>;
// const Auth = () => <h1>Auth</h1>;
// const Rated = () => <h1>Rated</h1>;
const Friends = () => <h1>Friends</h1>;

function App() {

  return (
    <div>
      <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/rated" element={<Rated />} />
            <Route exact path="/friends" element={<Friends />} />
            <Route exact path="/movie/:id" element={<Movie />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
