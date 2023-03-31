function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <h3>Precione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        } else {
            elementoChute.innerHTML += "<div>valor inválido</div>"
        }
    }

    else if  (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    else if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})