/*1. Crie um array para receber nomes dos alunos e outro para receber as notas
2. Para cada aluno inserido pergunte seu nome a nota da prova
3. Seu usuário deve poder parar de inserir informações quando desejar
4. Posteriormente exiba a nota de cada aluno, a soma das notas e a média geral da
turma*/

var nomes = []
var notas = []

var contadorNomes = 0
var contadorNotas = 0
var continuar = true
while (continuar) {
    var aluno = prompt("Qual e seu nome?")
    var notaSep = parseInt(prompt("Qual foi sua nota?"))
    nomes[contadorNomes] = aluno
    notas[contadorNotas] = notaSep
    contadorNomes++
    contadorNotas++
    var desejaContinuar = prompt("Insira 1 para parar")
    if (desejaContinuar == 1) {
        continuar = false
    }
}


for(index = 0; index < nomes.length; index++){
    console.log(nomes[index], notas[index])
}


var mediaNotas = 0
var somaNotas = 0
for(var i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

console.log("A soma das notas foi de:", somaNotas)
console.log("A media das notas foi de:", somaNotas / notas.length)