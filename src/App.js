import logo from './logo.svg';
import SearchForm from component
import './App.css';
//import Map from './Map';

function App() {
  return (
    <div className="App">

      <Route exact path="/search" component={SearchForm} />
          Learn React
  
    </div>
  );
}

export default App;
