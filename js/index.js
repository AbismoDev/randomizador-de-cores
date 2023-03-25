let fundoCor = document.querySelector('.container-cor')
let btnCor = document.getElementById('btn-cor')
let cores = ['red', 'green', 'blue', 'purple', 'orange']

const trocarCor = () =>{
    let corRandom = Math.floor(Math.random() * 5)
    fundoCor.style.backgroundColor = `${cores[corRandom]}`
    btnCor.style.backgroundColor = `${cores[corRandom]}`
    imprimirCor(corRandom)
}

const formataCorNome = (corRandom) =>{
    switch(cores[corRandom]){
        case 'red':
            return 'Vermelho'
        case 'green':
            return 'Verde'
        case 'blue':
            return 'Azul'
        case 'purple':
            return 'Roxo'
        case 'orange':
            return 'Laranja'
        default:
            return 'Error'
    }
}

const imprimirCor = (corRandom) =>{    
    document.getElementById('nomeCor').innerHTML = `Cor: ${formataCorNome(corRandom)}`
}

btnCor.addEventListener('click', trocarCor)