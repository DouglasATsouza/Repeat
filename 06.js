
let idade = (prompt("Digite a sua idade para cadastro de Doador de Sangue"));

if (idade >= 18 && idade <= 67) {
    confirm("Você pode doar sangue!");
} else if (idade > 0 && idade < 18 || idade > 67) {
    confirm("Você não pode doar sangue")
} else {
    alert("Dados inválidos!\nDigite novamente.")
}