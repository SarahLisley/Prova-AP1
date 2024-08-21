import React from "react";
const Questao01 = () => {//Usei a função arrow para criar o componente
    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40}
    ]

    return (
        <div>
            <Questao01B lista={lista}
            />
        </div>
    )
}

function Questao01B  (props) {//Usei function para criar o componente, ou seja, a função clássica
    const {lista} = props
    
    return(
        <div>
        <h2>Questao01B</h2>
            <ul>
            {lista.map((i, index) => {//
                const ma = Math.max(i.a, i.b, i.c);//Criei um objeto ma para passar os maiores numeros de cada item a, b
                // e c
                return <li key={index}> {index + 1}: {ma}</li>;//Aqui eu retorno a posição
            })}
            </ul>
        </div>
    )
}


export default Questao01
