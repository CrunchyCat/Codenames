import React, { useReducer } from 'react';
import { Link, useParams } from "react-router-dom";
import seedrandom from 'seedrandom';
import './Game.css';

let words = ['loading'];
let refreshWords = true;
let rng;

const Game = () => {
  let { seed } = useParams();
  rng = seedrandom(seed);
  
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  if (refreshWords) loadWords().then(() => forceUpdate());

  return (
  <div className="Game">
    <div className="text-center">
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">codenames</h3>
            <nav className="nav nav-masthead justify-content-center">
              <Link className="nav-link active" to="/local">game</Link>
              <Link className="nav-link" to="/stats">stats</Link>
              <Link className="nav-link" to="/settings">settings</Link>
            </nav>
          </div>
        </header>
        <main className="inner cover p-3" role="main">
          <h1>Game Board</h1>
          <p className="lead">blue team starts</p>
        </main>
      </div>
    </div>
    <Board />
  </div>
  );
};

function Board() {
  const runCallback = (f) => f();
  return (
    <div className="board">
      {runCallback(() => {
        const rows = [];
        words.forEach((word) => {
          rows.push(
            <div className="card" key={word}>
              <div className="card-body">{word}</div>
            </div>
          );
        });
        return rows;
      })}
    </div>
  )
}

const loadWords = async () => {
  refreshWords = false;
  words = (await (await fetch('/nouns.txt')).text()).split('\n').sort(() => .5 - rng()).slice(0, 25);
}

export default Game;