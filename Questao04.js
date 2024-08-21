import React, { useEffect, useState } from 'react';

const Questao04 = () => {
    const [capitais, setCapitais] = useState({ maior: '', menor: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
        const dadoPromessa = new Promise ((resolva) => {//Usa promessa, cria um promessa
                        resolva([//dados da capitais e a população
                            {"capital": ["Dublin"], "population": 4994724},
                            {"capital": ["Nicosia"], "population": 1207361},
                            {"capital": ["Madrid"], "population": 47351567}
                        ]);
                    });

                    // Espera a resolução da Promise
                    const dado = await dadoPromessa;

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
export default Questao04
