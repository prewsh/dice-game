function rollDice(){
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let result = document.getElementById("Result");
    let d1 = Math.floor(Math.random() * 6) +1;
    let d2 = Math.floor(Math.random() * 6) +1;
    let diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    result.innerHTML = "you rolled " + diceTotal + ".";
    if(d1===d2){
        
       result.innerHTML = "WOW! Double " + d1 +", you get a free turn"
    }
}