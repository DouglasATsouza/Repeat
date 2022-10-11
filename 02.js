let n = Number(prompt("Informe aqui qualquer valor: "))
var divisao = 0

for(i=1; i<=n; i++){
    if(n%i==0){
        divisao++;}}

    if(divisao==2){
        alert("É numero primo!")
    } else{
        alert("Não é um número primo!")
    }