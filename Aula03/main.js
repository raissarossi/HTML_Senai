const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menu-mobile')
botao.addEventListener('click', abrir)

function abrir(){
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
    //maneiras differentes 
    //botao.className == 'active'

    // if(botao.classList.contains('active')){
    //     botao.classList.remove('active')
    // }
    // else{
    //     botao.classList.add('active')  
    // }
}