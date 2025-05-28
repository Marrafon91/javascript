function contar() {
  let ini = Number(document.getElementById("txti").value);
  let fim = Number(document.getElementById("txtf").value);
  let passo = Number(document.getElementById("txtp").value);
  let res = document.getElementById("res");

  if (ini == 0 || fim == 0 || passo == 0) {
    window.alert("[ERRO] Faltam dados!");
    res.innerHTML = "Impossivel contar";
  } else {
    res.innerHTML = "Contando: <br>";
    if (ini <= fim) {
      //contagem crescente
      for (let c = ini; c <= fim; c += passo) {
        res.innerHTML += `${c} ↠`;
      }
    } else {
      //contagem regressiva
      for (let c = ini; c >= fim; c -= passo) {
        res.innerHTML += `${c} ↞`;
      }
    }
    res.innerHTML += "♛Muito Bem♛";
  }
}
