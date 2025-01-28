export const Calculos = (n) => {
    
    // Definición del número triangular
    const triangular = (num) => (num * (num + 1)) / 2;
    
    // Sucesión de Fibonacci
    const fibonacci = (num) => {
        const fib = [0, 1];

        // Llenamos un arreglo con la serie de Fibonacci, es decir: 
        // El siguiente número es igual a la suma de los dos anteriores
        for (let i = 2; i <= num; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        
        // Retornamos lo que hay en la posición [num] del arreglo
        return fib[num];
    };

    // Cálculo del número primo
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const prime = (num) => {
        let count = 0;
        let current = 2;
        while (count < num) {
            if (isPrime(current)) {
                count++;
            }
            if (count < num) current++;
        }
        return current;
    };

    // Retornamos el cáculo que nos solicitaron
    return prime(n + 1) - 2 * triangular(n) + fibonacci(n + 1);
};
