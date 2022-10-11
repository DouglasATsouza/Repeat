
let turno = prompt("Em qual turno voce estuda? Digite uma das opções abaixo:\n(M) para Matutino\n(V) para Vespertino\n(N) para Noturno");
let turnoResposta = turno.toUpperCase()

switch(turnoResposta){
    case "M":
    alert("Bom dia!")
    break;
    case "V":
    alert("Boa tarde!")
    break;
    case "N":
    alert("Boa noite!")
    break;
    default:
        alert("Valores incorretos. Digite novamente!")
    }
