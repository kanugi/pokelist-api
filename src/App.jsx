import { useState, useEffect } from 'react'
import PokeList from '../components/PokeList'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div style={styles.container}>
      <h2>PokeAPI</h2>
      <PokeList pokemonList={pokemonList}/>
    </div>
  )
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    textAlign: "center",
    padding: "80px",
  },
}

export default App
