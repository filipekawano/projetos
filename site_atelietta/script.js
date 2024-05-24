var menu = document.querySelector('span#burger')
menu.addEventListener('click', clickMenu)

function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
