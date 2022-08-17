import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from  "wouter"

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Gif founder</h1>
        <Link to='/gif/f1'>Gifs de F1</Link>
        <Link to='/gif/bmx'>Gifs de BMX</Link>
        <Link to='/gif/parkour'>Gifs de Parkour</Link>
        <Route 
        component={ListOfGifs} 
        path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
