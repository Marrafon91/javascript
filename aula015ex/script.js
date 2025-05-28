function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.getElementById('res');

    // Verifica se o campo de ano está vazio ou se o ano é maior que o atual
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        // Verifica o gênero selecionado
        if (fsex[0].checked) {
            genero = 'Homem'; 
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png');
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png');
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src', 'imagens/adulta.png');
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosa.png');
            }
        }

        // Estiliza e exibe o resultado
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}