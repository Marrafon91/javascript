function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <= 12) {
    //manhã
    img.src = 'imagens/manha.png'
    document.body.style.background = '#FFCC93'
} else if ( hora >= 12 && hora <= 18) {
    //tarde
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#913802'
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#005AA5'
    //noite
}
}
