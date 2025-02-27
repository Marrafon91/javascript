let imc = 18.5
console.log(`Você está com ${imc}%`)
if(imc < 18.5) {
    console.log('Abaixo do Peso')
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal')
} else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso')
} else if (imc >= 30 && imc < 34.9) {
    console.log('Obesidade')
} else {
    console.log('Obesidade Grave')
}

   
    
