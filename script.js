function enviarValor() {
    let numeroEnviarVariavel = document.getElementById("number").value

    localStorage.setItem("Número", numeroEnviarVariavel)
}