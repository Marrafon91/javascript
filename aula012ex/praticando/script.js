function Carregar() {
    let img = window.document.querySelector('#foto img')
    let msg = window.document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.png'
        document.body.style.background = 'linear-gradient(120deg, #FDB813, #DF9236)' // Degradê manhã
        msg.innerHTML += `<br>Bom dia! 🌞<br>Depois do café da manhã, algumas atividades que você pode fazer para começar o dia bem são:`
        msg.innerHTML += `
        <ul>
            <li>Meditar</li>
            <li>Alongamento</li>
            <li>Caminhada rápida</li>
        </ul>`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/tarde.png'
        document.body.style.background = 'linear-gradient(120deg, #F56217, #9D2828)' // Degradê tarde
        msg.innerHTML += `<br>Boa tarde! 🌇<br>Atividades para manter o foco na parte da tarde:`
        msg.innerHTML += `
        <ul>
            <li>Passear com o cachorro</li>
            <li>Academia</li>
            <li>Tomar aquele cafezinho ☕</li>
        </ul>`
    } else {
        img.src = 'imagem/noite.png'
        document.body.style.background = 'linear-gradient(120deg, #1C1C3B, #0D0D29)' // Degradê noite
        msg.innerHTML += `<br>Boa noite! 🌙<br>Atividades para relaxar:`
        msg.innerHTML += `
        <ul>
            <li>Ler um livro</li>
            <li>Assistir série</li>
            <li>Dormir</li>
        </ul>`
    }
}
