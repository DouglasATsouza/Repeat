let tabuadaDo = Number(prompt("Fazer a tabuada do número (entre 1 e 10): "))
i = 0

switch(true) {
    case (tabuadaDo >= 1 && tabuadaDo <= 10):
        while (i <= 10) {
            document.write(tabuadaDo, '*', i, '=', tabuadaDo * i, "<br>");
            i++
        }
        break;
    default:
        alert("Número inválido!")
}