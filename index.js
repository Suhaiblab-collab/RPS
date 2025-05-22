alert("welcome to this simple rook, paper,scissors game against the computer. its a best of three. the first player to get 2 points wins")
let userScore = 0
let compScore = 0
let userChoice;
let round = 1
let roundsPlayed = 0
for(round; round<=3; round++)  {
    userChoice = prompt("please enter your choice:").toLowerCase()
    let compNumber = Math.random() * 3 +1
    compNumber = Math.floor(compNumber)
    console.log(compNumber)



    let assignNmberToWord = {
        1: "rock",
        2: "paper",
        3: "scissors"
    
}
    compChoice = assignNmberToWord[compNumber]
    if (compChoice === userChoice){
        alert("its a tie!")
        roundsPlayed++
    }else if(
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper") 
    )   {
            alert("You won!")
            userScore++
            roundsPlayed++
     } else{
        alert("You lose!")
        compScore++
        roundsPlayed++
    }
      
}
if( userScore === 2 && compScore< 2  )   {
    alert(`You won, Score: ${userScore}_${compScore}`)
}  else if( compScore=== 2 && userScore < 2){
    alert(`You lost, Score: ${userScore}_${compScore}`)
}  else if(userScore === compScore && roundsPlayed === 3) {
    alert("the match ended in a tie")
}  else if(roundsPlayed === 3){
        if(userScore > compScore)
            alert(`You won, Score: ${userScore}_${compScore}`)
        else{
            alert(`You lost, Score: ${userScore}_${compScore}`)
        }

}

