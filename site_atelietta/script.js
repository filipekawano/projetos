var menu = document.querySelector('#menu_burger')
var fechar = document.querySelector('#close')
menu.addEventListener('click', clickMenu)
fechar.addEventListener('click', clickMenu)

function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none'
        menu.style.display ='flex'
        fechar.style.display = 'none'
    } else {
        itens.style.display = 'block'
        menu.style.display ='none'
        fechar.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
        if (fechar.style.display == 'block' && itens.style.display == 'none') {
            fechar.style.display = 'none'
            menu.style.display = 'flex'
        }
    }
}
