
//class selectors 

let PlayerScore = document.getElementsByClassName('player-current-score')
let computerScore = document.getElementsByClassName('computer-current-score')
let Plychoice = document.getElementById('player-choice')
let Comchoice = document.getElementById('computer-choice')
let msg = document.getElementById('message')

//main function 

function main(choice){
    let playerOptions = choice.id
    
     playerchoice(playerOptions)
   
    let bot = computer_choice()
    console.log({bot})
  
    let winFunction = winner(playerOptions,bot)
    console.log(winFunction)

    var final = result(winFunction)
    console.log(final)
}


//player choice function 

function playerchoice(pChoice){
    if(pChoice == 'rock'){
        Plychoice.src = 'humanrock.png'
    }else if(pChoice == 'paper'){
        Plychoice.src = 'humanpaper.png'
    }else{
        Plychoice.src = 'scissors.png'
       
    }
}


//computer choice

function computer_choice(){
     var choice_array = ['rock', 'paper', 'scissors']
     var computerChoice = choice_array[Math.floor(Math.random() * choice_array.length)]
          if(computerChoice == 'rock' ){
      Comchoice.src = 'rock.png'
    //  Comchoice.style.transform = 'scaleX(1)'
     } else if(computerChoice == 'paper'){
      Comchoice.src = 'paper.png'
    //  Comchoice.style.transform = 'scaleX(1)'
     }else if (computerChoice == 'scissors') {
      Comchoice.src = 'Comscissors.png'
     // Comchoice.style.transform = 'scaleX(-1)'
}
       return computerChoice
}

// decide winner function

function winner(playerchoice, botchoice){
  
 var rpsdataset  = {
    'rock':{'scissors':1, 'rock':0.5, 'paper':0},
    'paper':{'rock': 1, 'paper':0.5, 'scissors':0},
    'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
 }

 var playercard = rpsdataset[playerchoice][botchoice]
 var computercard = rpsdataset[botchoice][playerchoice]

 return [playercard, computercard];
}

// resutl function 

function result([playercard]){
    let playerscore = document.getElementById('player-current-score')
    let computerscore = document.getElementById('computer-current-score')
   
    
    if(playercard == 1){
        
        playerscore.innerHTML++
        return msg.innerHTML = 'player' + '<br>' +'won'
      
    }
         else if(playercard == 0.5){
    
        msg.innerHTML = 'its draw'
      return  {'message': 'draw'};
  
    }else if(playercard == 0){
    
         computerscore.innerHTML++
        return msg.innerHTML = 'player' + '<br>' +'lose'
   }
}
 
document.querySelector('.reset').addEventListener('click', reset)



function reset(){
    
    let playerscore = document.getElementById('player-current-score')
    let computerscore = document.getElementById('computer-current-score')
    Comchoice.src = 'rock.png'
    Plychoice.src = 'humanrock.png'
    playerscore.innerHTML = 0 
    computerscore.innerHTML  = 0
    msg.innerHTML = ''
}

