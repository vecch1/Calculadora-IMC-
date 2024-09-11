const btnResult = document.getElementById("#btn-result")
const btnRemove = document.getElementById("#btn-remove")

 function calcularImc(){
    const altura = parseFloat(document.getElementById("#Altura").value)
    const peso = parseFloat(document.getElementById("#Peso").value)
    const imc = peso / (altura * altura)
    const resultado = document.getElementById("Resultado")
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
 }

    btnResult.addEventListener("click", function(calcularImc){
        
     })


     function removerImc(){

     }


     btnRemove.addEventListener("click", function(removerImc){
        
     })
