import './App.css';
import LandingPage from './components/Landing/Landing';
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useState } from 'react';


function App() {
  const[games,setGames]= useState([]);
  const location = useLocation();

  const onSearch=(name) =>{
    fetch(`http://localhost:3001/videogames/${name}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
              if(!isRepetida(data.name)){
              setGames(allGames => [...allGames, data])
              } else {
                  window.alert("Juego en pantalla");
                }
              } else {
                window.alert("Juego no encontrado");
              }
          });
        }
        function isRepetida(name) {
          let aux = false;
          games.forEach((game) => {
              if(game.name === name) aux = true;
            });
          return aux;
          }      
  return (
    <div className="App">
      {/* <Header/> */}
      {location.pathname !== "/" && <Nav  onSearch={onSearch}/>}
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path='/videogames' element={<Cards games={games}/>} />
        {/* <Route path='/detail' element={<Detail/>}/> */}
      </Routes>
      <footer className="footer">Create for Ysacc in Henry</footer>
    </div>
  );
}

export default App;
