function vermelho() {
    document.querySelector('.circulo_vermelho').classList.remove('amarelo')
    document.querySelector('.circulo_vermelho').classList.remove('verde')

    document.querySelector('.circulo_verde').classList.remove('verde')

    document.querySelector('.circulo_vermelho').classList.add('vermelho')

}

function amarelo() {
    document.querySelector('.circulo_vermelho').classList.remove('vermelho')
    document.querySelector('.circulo_vermelho').classList.remove('amarelo')
    document.querySelector('.circulo_vermelho').classList.remove('verde')

    document.querySelector('.circulo_amarelo').classList.remove('vermelho')
    document.querySelector('.circulo_amarelo').classList.remove('verde')

    document.querySelector('.circulo_verde').classList.remove('verde')

    document.querySelector('.circulo_amarelo').classList.add('amarelo')

}

function verde() {
    document.querySelector('.circulo_vermelho').classList.remove('vermelho')
    document.querySelector('.circulo_vermelho').classList.remove('amarelo')
    document.querySelector('.circulo_vermelho').classList.remove('verde')

    document.querySelector('.circulo_amarelo').classList.remove('vermelho')
    document.querySelector('.circulo_amarelo').classList.remove('amarelo')
    document.querySelector('.circulo_amarelo').classList.remove('verde')

    document.querySelector('.circulo_verde').classList.add('verde')
}

function limpar() {

    document.querySelector('.circulo_vermelho').classList.remove('vermelho')
    document.querySelector('.circulo_vermelho').classList.remove('amarelo')
    document.querySelector('.circulo_vermelho').classList.remove('verde')

    document.querySelector('.circulo_amarelo').classList.remove('vermelho')
    document.querySelector('.circulo_amarelo').classList.remove('amarelo')
    document.querySelector('.circulo_amarelo').classList.remove('verde')

    document.querySelector('.circulo_verde').classList.remove('vermelho')
    document.querySelector('.circulo_verde').classList.remove('amarelo')
    document.querySelector('.circulo_verde').classList.remove('verde')
}