import './App.css';

function App() {
  return (
    <div className="App text-center">
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">codenames</h3>
            <nav className="nav nav-masthead justify-content-center"><a className="nav-link active" href="#">play</a><a className="nav-link" href="#">how to play</a><a className="nav-link" href="#">changes</a></nav>
          </div>
        </header>
        <main className="inner cover" role="main">
          <h1 className="cover-heading">start or join a session</h1>
          <p className="lead">codenames is a game of guessing words related to the hints given by your spymaster</p>
          <p className="lead"><a className="btn btn-lg btn-secondary" href="#">host game</a></p>
          <p className="lead"><a className="btn btn-lg btn-secondary" href="#">join game</a></p>
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Created by <a href="http://www.calebhoff.com/">Caleb Hoff</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
