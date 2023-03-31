import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './style.css'

export function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters')
            const data = await response.json()
          
            setCharacters(data)
        }

        getCharacters()
    }, [])

    console.log(characters)


    return (   
    <>
      <h1>Personagens</h1>
      <ul>
     
        {
            characters.length < 1 ?
            <span>Carregando...</span> :
            characters.map((character) => {
              return (
                <>
                <li key={character._id}>
                    <Link to={`/details/${character._id}`}>
                    {character.name} 
                    </Link>
                </li>
                </>
              )
            })
          }
      </ul>
    </>
   )

}

