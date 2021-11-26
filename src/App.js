//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import Menu from './components/menu';
import MovieList from './components/MoviesList';
import Searcher from './components/searcher';

function App() {
  // const [stateCar, setStateCar] = useState(false);
  // const [contador, setContador] = useState(0);

  // useEffect(() => {
  //   console.log(contador);
  // }, [contador]);

  // const encenderApagar = () => {
  //   setStateCar(!stateCar);
  //   setContador(contador + 1);

  //   if(stateCar){
  //     console.log("El vehiculo esta encendido");
  //   }else{
  //     console.log("El vehiculo esta apagado");
  //   }
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <button onClick={encenderApagar} className="btn btn-primary">Encender / Apagar</button>
  //     </header>
  //   </div>
  // );

  const [visible, setVisible] = useState(true)
  const [textSearch, setTextSearch] = useState("");

  const handleChangeText = (e) => {
    setTextSearch(e.target.value);
    console.log(e.target.value);
  };

  const clearText = () => {
    setTextSearch("");
  };


  return (
    <>
      <Menu text={textSearch} onChangeText={handleChangeText} clearText={clearText} />
      <div className="container">
        <Searcher />
      </div>
      {visible && <MovieList/> }
      <button onClick={()=>setVisible(!visible)}>Ocultar</button>
     </>
  )

}

export default App;
