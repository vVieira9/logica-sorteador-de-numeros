function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    if(isNaN(quantidade) || isNaN(numeroInicial) || isNaN(numeroFinal)) {
        alert('Certifique-se de preencher os campos corretamente.')
        return;
    }

    if (numeroInicial >= numeroFinal) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número".');
        alert('Insira as informações corretamente e tente novamente.');
        return;
    }
    
    let intervalo = numeroFinal - numeroInicial + 1;

    if (quantidade > intervalo) {
        alert('O campo "Quantidade" deve ser menor ou igual ao intervalo entre os campos "Do número" e "Até o número".');
        return;
    }
    
    for (let i = 0; i < quantidade; i++) {
        let numero;

        numero = obterNumeroAleatorio(numeroInicial,numeroFinal);
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(numeroInicial,numeroFinal);
        }

        sorteados.push(numero);
    }

    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    alterarStatusReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.disabled) {
        botao.disabled = false;
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.disabled = true;
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusReiniciar();
}

