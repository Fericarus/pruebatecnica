// Impoirtamos archivos y componentes
import "./App.css";
import React, { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Calculos } from "./components/Calculos";
import { Resultados } from "./components/Resultados";

function App() {

  // Manejamos todo con un estado
	const [result, setResult] = useState(null);

  // Función que se ejecuta al momento de enviar el formulario
	const handleCalculate = (n) => {
		const resultadoDeCalculos = Calculos(n);
		setResult(resultadoDeCalculos);
	};

	return (
		<div className="max-w-md mx-auto mt-10 space-y-6">
			
      {/* Renderizamos el componente Formulario que recibe onSubmit como prop */}  
      <Formulario onSubmit={handleCalculate} />

      {/* Renderizamos el componente Resultado que recibe result como prop */}
			{result !== null && <Resultados result={result} />}
		
    </div>
	);
}

export default App;
