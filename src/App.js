import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='kitty' />
      </section>
    </div>
  );
}

export default App;
