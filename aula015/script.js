function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src','imagens/bebe-homen.png')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem-homen.png')
            } else if (idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
                // idoso
            }
               
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src','imagens/bebe-mulher.png')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovem-mulher.png')
            } else if (idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src','imagens/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}