let agora = new Date()
let diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.lot('Quinta-feira')
        break
    case 5: 
        console.log ('sexta-feira')
        break
    case 6:
        console.log('Sabádo')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break               
}

