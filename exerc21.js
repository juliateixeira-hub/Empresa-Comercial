// seu código deve impedir uma despesa maior que o saldo disponível e no
// final exibir o saldo atual desse projeto.
// 2. Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
// perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
// 3, que são seus divisores. A função deve retornar um valor booleano.
// 3. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
// dados sobre o salário e o número de filhos. A prefeitura deseja saber:
// a. A média do salário da população;
// b. A média do número de filhos;
// c. O maior salário;
// d. A porcentagem de pessoas com salários até R$1.500,00
// Salve os dados dos habitantes em arrays, crie uma função para cada item que
// retorna o que é pedido.
// 4. Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra. Se a
// letra for A a função calcula a média aritmética das notas do aluno, se for P, a sua
// média ponderada (pesos: 5, 3 e 2). A média calculada deve ser retornada
let nome = []
let orçamento = []
let valor = []                                                  //receita + / despesa -
let despesa = []
let saldo = []
let receita = []

console.log(ReceberProjeto(saldo))

function CriarProjeto() {
    NomeProjeto(nome [index] = prompt("Qual é o nome do projeto?") )
    OrçamentoTotal(orçamento[index] = prompt("Qual é o orçamento total?"))
 }

function ReceberProjeto(nomeParametro, valorParametro, despesaParametro) {
    for (let index = 0; index < receita; index++) {
        saldo = receita[index] + saldo
    }
    for (let index = 0; index < despesa; index--) {
        saldo = despesa[index] - saldo
        if (despesa > saldo){
            return 0 
        }
    }
}
