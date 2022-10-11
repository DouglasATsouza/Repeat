

let altura = prompt("Digite sua altura (em metros): ")
let s = prompt("Digite seu sexo: \n(1) Femino\n(2) Masculino")
m = 62.1
o = 72.7


if(s == 1){
    confirm(`O seu peso ideal é de ${(altura*m)-44.7.toFixed(3)}`)
} else if(s == 2){
    confirm(`O seu peso ideal é de ${(altura*o)-58.1.toFixed(3)}`)
}else{
    alert("Valores inválidos!")
}
