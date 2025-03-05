function contar() {
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '';

    if (inicio === 0 || fim === 0 || passo === 0) {
        resultado.innerHTML = 'Preencha todos os campos corretamente!';
        return;
    }

    if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }

    if (inicio < fim) {
        // Contagem crescente
        for (let i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += `${i} 👉 `;
        }
    } else {
        // Contagem decrescente
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += `${i} 👉 `;
        }
    }

    resultado.innerHTML += '🏁';
}
