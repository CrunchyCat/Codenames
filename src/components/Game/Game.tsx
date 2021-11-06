import React, { useReducer } from 'react';
import { Link, useParams } from "react-router-dom";
import seedrandom from 'seedrandom';
import './Game.css';

let cards = [{word: 'loading', color: 'dark', turned: false}];
let refreshWords = true;

const Game = () => {
  const [_, forceUpdate] = useReducer(x => x + 1, 0);
  let { seed } = useParams();
  const rng = seedrandom(seed);

  const Board = () => {
    const runCallback = (f) => f();
    return (
      <div className="board">
        {runCallback(() => {
          const rows = [];
          cards.forEach((card, index) => {
            rows.push(
              <button className={`card m-2 card-${card.turned ? card.color : 'white'}`} key={card.word + index} onClick={flipCard(index)}>
                <div className="card-body">{card.word}</div>
              </button>
            );
          });
          return rows;
        })}
      </div>
    )
  }
  
  const flipCard = (index) => () => {
    cards[index].turned = true;
    forceUpdate();
  }
  
  const loadWords = async () => {
    refreshWords = false;
    const words = (await (await fetch('/nouns.txt')).text()).split('\n').sort(() => .5 - rng());
    cards = words.slice(0, 9).map(word => ({word, color: 'blue', turned: false}))
    .concat(words.slice(9, 17).map(word => ({word, color: 'red', turned: false})),
            words.slice(17, 24).map(word => ({word, color: 'yellow', turned: false})),
            words.slice(24, 25).map(word => ({word, color: 'black', turned: false})));
    cards.sort(() => rng() - 0.5);
    forceUpdate();
  }
  
  if (refreshWords) loadWords(); // Asynchronously Load Words

  return (
  <div className="Game">
    <div className="text-center">
      <div className="cover-container d-flex h-100 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
          <Link to="/ "><h3 className="masthead-brand">codenames</h3></Link>
            <nav className="nav nav-masthead justify-content-center">
              <Link className="nav-link active" to="/local">game</Link>
              <Link className="nav-link" to="/stats">stats</Link>
              <Link className="nav-link" to="/settings">settings</Link>
            </nav>
          </div>
        </header>
        <main className="inner cover" role="main">
          <h1 className="mt-2 mb-0">game board</h1>
          <p className="lead mt-0 mb-2">blue team starts</p>
        </main>
      </div>
    </div>
    <Board />
  </div>
  );
};

export default Game;