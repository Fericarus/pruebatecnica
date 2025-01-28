import React from "react";

export const Resultados = ({ result }) => {
    return (
        <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-bold">Resultado:</h2>
            <p className="text-lg">El término de la serie <span style={{fontWeight: 'bolder'}}>n</span> es:  
                <span style={{color: '#26C6DA', fontWeight: 'bolder', fontSize: '18px'}}>{' ' + result}</span>
            </p>
        </div>
    );
};
