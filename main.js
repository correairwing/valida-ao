const form = document.getElementById('form-valida')

form.addEventListener('submit', function(e){
    e.preventDefault();
})

function verificar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = document.getElementById("result");
    let falha = document.getElementById('error')

    if (num2 > num1) {
        falha.innerHTML = "Erro: o segundo número é maior que o primeiro!";
    } else {
    resultado.innerHTML = "Valores digitados corretamente.";
    }
}





console.log(form)
