import React, { useEffect, useState } from 'react';

const Questao03 = () => {
    const [capitais, setCapitais] = useState({ maior: '', menor: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                const dado = await response.json();

                // Ordena os dados pela população
                dado.sort((a, b) => a.population - b.population);

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
            <p>Menor População: {capitais.menor}</p>
            <p>Maior População: {capitais.maior}</p>
        </div>
    );
};
export default Questao03
