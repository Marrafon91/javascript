let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor foi encontrado na posição ${pos}`)
}
console.log(`O valor esta na posição ${pos}`)









/*for(let pos = 0;pos < num.length; pos++){
    console.log(num[pos]) // pos é o index
}


num[5] = 10 // Add um elemento no numero selecionado da array
num.push(7) // Add um elemento no final da array
num.length // Mostra o tamanho da array
num.sort() // Organiza a array em ordem crescente*/