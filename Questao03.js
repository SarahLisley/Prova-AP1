import React, { useEffect, useState } from 'react';//Usa react

const Questao03 = () => {
    const [capitais, setCapitais] = useState({ maior: '', menor: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");//usa await fetch do paises
                const dado = await response.json();

                // Ordena os dados pela população
                dado.sort((a, b) => a.population - b.population);//aqui usa o sort para ordena o array

                // Obtém as capitais com menor e maior população
                const menorPopulacao = dado[0].capital[0];
                const maiorPopulacao = dado[dado.length - 1].capital[0];

                setCapitais({ menor: menorPopulacao, maior: maiorPopulacao });
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Capitais com Menor e Maior População</h1>
            <p>Menor População: {capitais.menor}</p>//retorna a capital com menor população
            <p>Maior População: {capitais.maior}</p>//retorna a capital com maior população
        </div>
    );
};
export default Questao03
