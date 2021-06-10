import React from 'react'
import names from './data'
import {useState, useEffect} from 'react'
import './App.css';


function App() {
  const [searchName, setSearchName] = useState("");
  const [resultsName, setResultsName] = useState([]);
  
  
  function handleSearch(event) {
    setSearchName(event.target.value)
  };

  useEffect(() => {
    const resultado = names.filter((nome) => nome.toLowerCase().includes(searchName.toLowerCase()));
   setResultsName(resultado);
  }, [searchName]);


  return (
    <div className="App">
      <label htmlFor="">Search avaliable names here</label><br/>
      <input type="text" onChange={handleSearch} value={searchName}/>
      { searchName && resultsName.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default App;
