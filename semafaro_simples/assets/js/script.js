function trocaCorVermelho() {
    document.querySelector('.vermelho-circulo').classList.remove('vermelho')
    document.querySelector('.amarelo-circulo').classList.remove('amarelo')
    document.querySelector('.verde-circulo').classList.remove('verde')

    document.querySelector('.vermelho-circulo').classList.add('vermelho')
}

function trocaCorAmarelo() {
    document.querySelector('.vermelho-circulo').classList.remove('vermelho')
    document.querySelector('.amarelo-circulo').classList.remove('amarelo')
    document.querySelector('.verde-circulo').classList.remove('verde')

    document.querySelector('.amarelo-circulo').classList.add('amarelo')
}

function trocaCorVerde() {
    document.querySelector('.vermelho-circulo').classList.remove('vermelho')
    document.querySelector('.amarelo-circulo').classList.remove('amarelo')
    document.querySelector('.verde-circulo').classList.remove('verde')

    document.querySelector('.verde-circulo').classList.add('verde')
}

setInterval(trocaCorVermelho, 2000)
setInterval(trocaCorAmarelo, 2100)
setInterval(trocaCorVerde, 2300)