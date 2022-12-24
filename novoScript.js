/* letiaveis do input*/

//Resposta
let res = document.getElementById('res')
//form
let form = document.getElementById('form')


// Retorna uma arrow function
form.addEventListener("submit", (e) => {
        e.preventDefault()

        // As variaveis tem que ficar dentro da funçao
        let nome = document.getElementById('nome').value
        //Forma diferente de localizar e poder adicionar mais funcionalidades do calculo e qualquer outra coisa
        let altura = document.getElementById('altura').value 
        let alturaCal = altura / 100
        
        let peso = document.getElementById('peso').value

        // toFixed(2) quer dizer no maximo 2 casas decimais
     
        let calculoImc =   peso / (alturaCal*alturaCal).toFixed(2)


         // Primeiro se faz uma validação e depois o calculo no caso o if
        if(nome !== '' && altura !== '' && peso !== ''){
            let cliente = '';

        if( calculoImc < 18.5){
            // abaixo do peso
           cliente = 'Você esta abaixo do peso'
        } else if(calculoIMC < 25){
            // peso ideal
            cliente = 'Parabéns você esta no peso ideal'
        } else if(calculoIMC < 30) {
            // levemente acima do peso
            cliente = 'Você está levemente acima do peso'
        }  else if(calculoIMC < 35){
              // 35 com obesidade grau 1
              cliente = 'Você está com obesidade grau 1'
        } else if(calculoIMC < 40){
            // 40 com obesidade grau 2
            cliente = 'Você está com obesidade grau 2'
        }  else {
            // com obesidade grau 3 cuidado!!
            cliente = 'Cuide-se você esta com obesidade grau 3,procure se cuidar urgentemente'
        } 

        res.innerHTML = `<p>Olá ${nome} o seu calculo imc é ${calculoImc}. <br> ${cliente}</p>`
     } else {
            alert('Preencha os campos corretamente')
        }
      
    })

    let limpar = document.querySelector('#limpar')
    limpar.addEventListener('click', function(){
        form.value = ''
        res.remove()
    })
  
    
/*
if(nome !== '' && altura !== '' && peso !== ''){
} else {
      alert('Preencha os campos corretamente')  */


