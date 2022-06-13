// 1. Variáveis
let estaChovendo = true;
const meuNome = "Mayk";

console.log(estaChovendo);
estaChovendo = false;
console.log(estaChovendo);

// 2. Tipos de dados
// String
// ""
// ''

// Number
// 12 - Integer (+ -)
// 3.2 - Float (+ -)

// Boolean
// true ou false
// const maiorDeDezoito = false;

// undefined


// 3. Operadores
// Atribuição (ex: =)
// Atribui valor a variavel
let n1 = 12;
let n2 =3;

// Aritméticos (ex: * / + - )
// calculos matemáticos simples

//Concatenação de String (+)

// Comparação (ex: > < ==)
// transforma a expressão em true ou false
const maiorQue = 1 > 2;


// 4. Condicional (if/else)
const idade = 17
const maiorDeDezoito = idade >= 18;

if (maiorDeDezoito) {
    console.log("Pode tirar a carteira de motorista");
} else {
    console.log("Não pode tirar");
};

// 5. Estrutura de dados
// Array - Vetor - Lista
// Array --------      0     1    2  3 
const temperaturas = [23.3, 32.2, 1, 5];

// Object
 const pessoa = {
    nome: "Helen Cris",
    idade: 21,
    filhos: ["K", "E", "J", "L"]
};

console.log(pessoa.filhos[1]);


// 6. Function
    // 1. Criação
    function nomeDaFuncao () {
        console.log('código dentro da função');
    };
    // 2. Execução
    nomeDaFunção();

    // 3. Parametros
    function soma(a, b) {
        console.log(a+b);
    };
    soma(34, 35);
    // 4. Retorn
    function soma(a,b) {
        return a + b;
    };

  
// 7. Extensões da linguagem (ex. Math, Date ...)

// Math.random();
// Math.floor();   arredonda pra baixo
// Math.ceil(1.2); arredonda pra cima


// 8. DOM - Document Object Model

    // window
    window.alert("alerta");
    // document
    document.write("texto");
    // manipular elementos
    // document.documentElement.style.background = "white";