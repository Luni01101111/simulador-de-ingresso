function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidadeIngresso) || quantidadeIngresso <= 0) {
        alert('Número invalido');
    } else if (tipoIngresso == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeIngresso > quantidadePista) {
        alert('Quantidade indisponível');
    } else {
        quantidadePista = quantidadePista - quantidadeIngresso
        document.getElementById('qtd-pista').textContent = quantidadePista
        alert('Compra bem sucedida');
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidadeIngresso > quantidadeSuperior) {
        alert('Quantidade indisponível');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso
        document.getElementById('qtd-superior').textContent = quantidadeSuperior
        alert('Compra bem sucedida');
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeIngresso > quantidadeInferior) {
        alert('Quantidade indisponível');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeIngresso
        document.getElementById('qtd-inferior').textContent = quantidadeInferior
        alert('Compra bem sucedida');
    }
}