
var playerValue
var pcValue

let playerChoice = document.getElementById('choicePlayer')
let pcChoice = document.getElementById('choicePc')

function startGame(value) {
    const piedra = document.getElementById('piedra').value
    const papel = document.getElementById('papel').value
    const tijera = document.getElementById('tijera').value
    if(value === piedra){
        playerValue = piedra
        console.log('Value :' + playerValue)
    } else if (value === papel){
        playerValue = papel
        console.log('Value :' + playerValue)
    } else {
        playerValue = tijera
        console.log('Value :' + playerValue)
    }
    generateNumber()
    winnerAndInsert(playerValue, pcValue)
}

function generateNumber (params) {
    
    let random = Math.floor(Math.random() * 3)

    if(random == 0){
        pcValue = 'piedra'
    } else if(random == 1){
        pcValue = 'papel'
    } else {
        pcValue = 'tijera'
    }
    console.log('Pc : ' + pcValue)
}


function winnerAndInsert(player, pc) {
    
    if(player === 'piedra' && pc === 'papel'){
        console.log('PC WINNS')
         playerChoice.innerHTML= '<img src="img/icons8-puño-en-roca-100.png" alt="">'
         pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
         
    } else if ( pc === 'piedra' && player === 'papel'){
        console.log('PLAYER WINNS')
        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
    }else if(player === 'papel' && pc === 'tijera'){
        console.log('PC WINNS ')
        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'

    } else if(player === 'tijera' && pc === 'papel'){
        console.log('PLAYER WINNS')
        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
    } else if (player === 'piedra' && pc === 'tijera'){
        console.log('PLAYER WINNS')
        playerChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'

    } else if (player === 'tijera' && pc === 'piedra'){
        console.log('PC WINNS')
        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
    }
     else if(player === 'piedra' && pc === 'piedra'){
        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        playerChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
    } else if(player === 'papel' && pc === 'papel'){
        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
    } else if(player === 'tijera' && pc === 'tijera'){
        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'

    }

}
