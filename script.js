function enviar() {
    var capacidade = document.getElementById("textinput1").value;
    verificarCapacidade({ capacidade })
}

function verificarCapacidade(object) {
    if (object.capacidade <= 25) {
        console.log("Bateria baixa, Conecte um carregador!")
        document.getElementById("resultado").innerHTML = "Bateria baixa, Conecte um carregador!"
    }
    if (object.capacidade >= 30 && object.capacidade <= 50) {
        console.log("Bateria estável!")
        document.getElementById("resultado").innerHTML = "Bateria estável!"
    }
    if (object.capacidade >= 51 && object.capacidade <= 100) {
        console.log("Bateria máxima!")
        document.getElementById("resultado").innerHTML = "Bateria máxima!"
    }

}