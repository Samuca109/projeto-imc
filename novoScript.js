/* Variaveis do input*/
let nome = document.querySelector('#nome').value
let altura = document.querySelector('#altura').value
let peso = document.querySelector('#peso').value
//Resposta
let res = document.querySelector('#res')
//Botao Calcular
let botao = document.querySelector('#botao')
//form
let form = document.querySelector('#form')

// Retorna uma arrow function
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Primeiro se faz uma validação e depois o calculo
    if(nome !== '' && altura !== '' && peso !== ''){
      
        let calculoImc = (peso / (altura*altura)) //.toFixed(2)
        let cliente = ''

        if( calculoImc < 18.5){
            // abaixo do peso
           cliente = 'Você Esta abaixo do peso'
        } else if(calculoImc < 25){
            // peso ideal
            cliente = 'Parabens você esta no peso ideal'
        } else if(calculoImc < 30) {
            // levemente acima do peso
            cliente = 'Você está levemente acima do peso'
        }  else if(calculoImc < 35){
              // 35 com obesidade grau 1
              cliente = 'Você esta com obesidade grau 1'
        } else if(calculoImc < 40){
            // 40 com obesidade grau 2
            cliente = 'Você esta com obesidade grau 2'
        }  else {
            // com obesidade grau 3 cuidado!!
            cliente = 'Cuide-se você esta com obesidade grau 3,procure se cuidar urgentemente'
        }
     } else {
        alert('Preencha os valores corretamente')
    }

    res.textContent = `<p>Ola ${nome} o seu calculo imc é ${calculoImc} e o seu resultado ${cliente}</p>`
})

console.log(res)



