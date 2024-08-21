import { useState } from "react"//Importa o react

import { createContext } from "react";//Cria um contexto
import { useContext } from "react"//Usa o contexto do react
export const PokemonContexto = createContext(0)//Cria um contexto
const Questao02 = () => {

    const [emFrente, setFrente] = useState(true);

    const toggleImage = () => {
        setFrente(!emFrente);
    };

    const frenteImagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';//foto de frente
    const atrasImagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';//Foto de trás

    const {id} = useContext(PokemonContexto)//Usa o contexto para o id
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png/"

    return (
        <div>
            <h1>Questao02</h1>
            <img src={emFrente ? frenteImagem : atrasImagem} alt="Pikachu" />
            <button onClick={toggleImage}>//Aqui cria o botão para virar para frente e para trás
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
export default Questao02//exporta a Questao02
