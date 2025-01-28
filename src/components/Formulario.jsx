import React, { useState } from "react";

export const Formulario = ({ onSubmit }) => {
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(number) && Number(number) > 0) {
            onSubmit(Number(number));
        } else {
            alert("Por favor, ingresa un número natural válido.");
        }
    };

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit} className="Form">
                <label htmlFor="number" className="block text-lg font-bold">
                    Ingresa un número natural:
                </label>
                <input
                    type="text"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="Input"
                    placeholder="Ingresa un número natural" 
                />
                <button
                    type="submit"
                    className="Button"
                >
                    Calcular
                </button>
            </form>
        </div>
    );
};
