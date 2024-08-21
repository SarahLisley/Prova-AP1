import { useState } from "react"

import { createContext } from "react";
import { useContext } from "react"
export const PokemonContexto = createContext(0)
const Questao02 = () => {

    const [emFrente, setFrente] = useState(true);

    const toggleImage = () => {
        setFrente(!emFrente);
    };

    const frenteImagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    const atrasImagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

    const {id} = useContext(PokemonContexto)
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png/"

    return (
        <div>
            <h1>Questao02</h1>
            <img src={emFrente ? frenteImagem : atrasImagem} alt="Pikachu" />
            <button onClick={toggleImage}>
                {emFrente ? 'Mostrar Costas' : 'Mostrar Frente'}
            </button>
        </div>
    )
}

   /* return (
        <div>
            <img
                src={url+id+".png"}
                alt="Pokemon"
                width={150}
            />
        </div>
    )
}*/
export default Questao02
