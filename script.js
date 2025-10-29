console.log("--- Início do Teste ---");

// Passo 1 – Declarando variáveis
console.log("--- Passo 1 ---");
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 – Atualizando valores
console.log("--- Passo 2 ---");
// Imagine que 5 salgados foram vendidos
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);


// Passo 3 – Teste rápido
console.log("--- Passo 3: Testes de Erro ---");

// Teste 1: O que acontece se tentar mudar o valor de precoSalgado?
console.log("Testando reatribuição de 'const'...");
try {
    precoSalgado = 6; // Isso vai gerar um erro
    console.log("ISSO NÃO DEVE APARECER.");
} catch (e) {
    console.error("ERRO CAPTURADO (const):", e.message);
}

// Teste 2: O que acontece se criar outra variável com var dentro de um bloco {}?
console.log("Testando escopo de 'var' vs 'let'...");
if (true) {
    var testeVar = "Sou var (dentro do bloco)";
    let testeLet = "Sou let (dentro do bloco)";
    console.log(testeVar); // funciona
    console.log(testeLet); // funciona
}

// Acessando 'var' fora do bloco
console.log("Acessando 'var' fora do bloco: " + testeVar); // funciona (vazou o escopo)

// Acessando 'let' fora do bloco
console.log("Testando acesso ao 'let' fora do bloco...");
try {
    console.log(testeLet); // Isso vai gerar um erro
    console.log("ISSO TAMBÉM NÃO DEVE APARECER.");
} catch (e) {
    console.error("ERRO CAPTURADO (let):", e.message);
}

console.log("--- Fim do Teste ---");
