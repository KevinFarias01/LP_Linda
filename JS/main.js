function mudaFoto(todas) {
    document.querySelector('.imagemGrande').src = todas;
}

function corCirculo(cor) {
    const circulo = document.querySelector('.circulo');
    circulo.style.background = cor;
}
