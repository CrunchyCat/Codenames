import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Game from "./components/Game/Game.tsx";
import './App.css';

const seed = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="howto" element={<HowTo />} />
      <Route path="changes" element={<Changes />} />
      <Route path="local/:seed/*" element={<Game />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <div className="App text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">codenames</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link active" to="/">play</Link>
                <Link className="nav-link" to="/howto">how to play</Link>
                <Link className="nav-link" to="/changes">changes</Link>
              </nav>
            </div>
          </header>
          <main className="inner cover p-3" role="main">
            <h1 className="cover-heading">start or join a session</h1>
            <p className="lead">codenames is a game of guessing words related to the hints given by your spymaster</p>
            <hr />
            <p className="lead"><Link className="btn btn-lg btn-secondary" to="/host">host game</Link></p>
            <p className="lead"><Link className="btn btn-lg btn-secondary" to="/join">join game</Link></p>
            <br/>
            <p className="lead"><Link className="btn btn-lg btn-secondary" to={`/local/${seed}`}>local game</Link></p>
          </main>
          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Created by <a href="http://www.calebhoff.com/">Caleb Hoff</a></p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

function HowTo() {
  return (
    <>
      <div className="App text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">codenames</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link" to="/">play</Link>
                <Link className="nav-link active" to="/howto">how to play</Link>
                <Link className="nav-link" to="/changes">changes</Link>
              </nav>
            </div>
          </header>
          <main className="inner cover p-3" role="main">
            <h1 className="cover-heading">how to play</h1>
            <p className="lead">here are some of the basic rules</p>
            <hr />
            <p>In each game, there are two teams: blue team &amp; red team</p>
            <p>The board consists of 25 words, in rows of 5. Each team must guess their words based on clues provided by the spymaster (the person who gives the hints).</p>
            Each turn, a team's spymaster will give the team a clue in the form:
            <p><i><b>X</b> # of words are related to word <b>Y</b></i>.</p>
            <p>For example, <i><b>2</b> words are related to word <b>spy</b></i>.</p>
            <p>The team must then guess the word that is related to the clue. Whichever team guesses all of their words first wins.</p>
          </main>
          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Created by <a href="http://www.calebhoff.com/">Caleb Hoff</a></p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

function Changes() {
  return (
    <>
      <div className="App text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">codenames</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link" to="/">play</Link>
                <Link className="nav-link" to="/howto">how to play</Link>
                <Link className="nav-link active" to="/changes">changes</Link>
              </nav>
            </div>
          </header>
          <main className="inner cover p-3" role="main">
            <h1 className="cover-heading">changes</h1>
            <p className="lead">anything new here?</p>
            <hr />
            <p className="small" style={{margin: 0}}>version 1.0</p>
            <p>Initial Release</p>
            <p>There is not anything new here yet, but check back later for new features and improvements.</p>
          </main>
          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Created by <a href="http://www.calebhoff.com/">Caleb Hoff</a></p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
