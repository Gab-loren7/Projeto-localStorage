function enviarValor() {
    let numeroEnviarVariavel = document.getElementById("number").value

    alert("O número que você digitou foi: "+numeroEnviarVariavel+"!")

    localStorage.setItem("Número", numeroEnviarVariavel)


}