let numero = Number(prompt("Digite aqui um número: "))
var num = 1

while(num <= numero){
    num %2 == 1 ? document.write(num) : document.write(", ")
    num++
}