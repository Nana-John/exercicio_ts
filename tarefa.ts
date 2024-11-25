function multiply(a: number, b: number): number {
    return a * b;
}

function greet(name: string): string {
    return `Olá ${name}`;
}

// Testando a função de multiplicação
const result = multiply(5, 3);
console.log(result); // Saída: 15

// Testando a função de saudação
const message = greet("Alessandra");
console.log(message); // Saída: Olá Alessandra
