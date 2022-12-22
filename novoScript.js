let nome = document.querySelector('#nome').value

let altura = document.querySelector('#altura').value

let peso = document.querySelector('#peso').value

let res = document.querySelector('#res')

let botao = document.querySelector('#botao')
function calcular(e){
    e.preventDefault()

    if(nome !== '' && altura !== '' && peso !== ''){
        alert('valor preencif')
    } else{
        alert('cuidado')
    }
}

botao.addEventListener('click', calcular)

/**
 * const calcular = (peso / (altura*altura)).toFixed(2);

        if(calcular < 18.5){
            //Abaixo do peso
            res.innerHTML = `<p>${nome} voce esta abaixo do peso</p>`
        } else {
            alert('deu rero')
        }
 */