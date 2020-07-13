var attempsPlayer = 0
var attempsPc = 0 

var playerValue
var pcValue

let playerChoice = document.getElementById('choicePlayer')
let pcChoice = document.getElementById('choicePc')
let addPlayer = document.getElementById('attempsPlayer')
let addPc = document.getElementById('attempsPc')
let endTheGame = document.getElementById('result')

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
    winner(attempsPlayer, attempsPc)
}

function generateNumber () {
    
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

function winner(player, pc) {
    
    if(player === 10 && pc < player){
        console.log('PLAYER WINNS')
        endTheGame.innerHTML = '<h1>YOU WON</h1>'
        setTimeout(() => {
            window.location.reload(); 
        }, 1000);
    } else if(pc === 10 && player < pc){
        console.log('YOU LOSE')
        endTheGame.innerHTML = '<h1>YOU LOSE</h1>'
        setTimeout(() => {
            window.location.reload(); 
        }, 1000);
    }

}

function winnerAndInsert(player, pc) {
    
    if(player === 'piedra' && pc === 'papel'){
        
         playerChoice.innerHTML= '<img src="img/icons8-puño-en-roca-100.png" alt="">'
         pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
         setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
         attempsPc++
         addPc.innerHTML = `${attempsPc}`
         
    } else if ( pc === 'piedra' && player === 'papel'){
        
        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
        attempsPlayer ++
        addPlayer.innerHTML = attempsPlayer
    }else if(player === 'papel' && pc === 'tijera'){
        
        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
        attempsPc++
        addPc.innerHTML = `${attempsPc}`
    } else if(player === 'tijera' && pc === 'papel'){
    
        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
        attempsPlayer ++
        addPlayer.innerHTML = attempsPlayer
    } else if (player === 'piedra' && pc === 'tijera'){
    
        playerChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
        attempsPlayer ++
        addPlayer.innerHTML = attempsPlayer
    } else if (player === 'tijera' && pc === 'piedra'){
        
        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);
        attempsPc++
        addPc.innerHTML = `${attempsPc}`
    }
//Empates
     else if(player === 'piedra' && pc === 'piedra'){

        pcChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        playerChoice.innerHTML = '<img src="img/icons8-puño-en-roca-100.png" alt="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);

    } else if(player === 'papel' && pc === 'papel'){

        playerChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-toda-la-mano-64.png" alt="" srcset="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);

    } else if(player === 'tijera' && pc === 'tijera'){

        playerChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        pcChoice.innerHTML = '<img src="img/icons8-tijeras-64.png" alt="" srcset="">'
        setTimeout(() => {
            playerChoice.innerHTML = ''
            pcChoice.innerHTML = ''
        }, 1000);

    }

}

