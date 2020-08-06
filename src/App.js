import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviList from './components/moviList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';


function App() {
  const [Movie, setMovie] = useState([{ titre: "Annihilation", rate: 3, image: "https://tse2.mm.bing.net/th?id=OIP.As7VFpB6R-xt0yBwf0FH2AHaK8&pid=Api&P=0&w=300&h=300" }, { titre: "Starwars", rate: 3, image: "https://tse3.mm.bing.net/th?id=OIP.NijsHlvV8hRVHnJloO_MDgHaFj&pid=Api&P=0&w=219&h=165" }])
  const AjoutMovie = (a, b, c) => {
    setMovie([...Movie, { titre: a, rate: b, image: c }])
  }
  return (
    <div>
      <MoviList movie={Movie} />
      <AddMovie AjoutMovie={AjoutMovie} />
    </div>
  );
}

export default App;
