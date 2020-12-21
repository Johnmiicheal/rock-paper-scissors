var userScore = 0;
var cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "user".fontsize(3).sub();
const smallCpuWord = "cpu".fontsize(3).sub();



function getCpuChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Paper";
}

function win(userChoice, cpuChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore; 
    console.log(userChoice);
    console.log(cpuChoice);
    // result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(cpuChoice)}${smallCpuWord}. You Win!! 🔥`;
    
}

function lose(userChoice, cpuChoice){
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${convertToWord(cpuChoice)}${smallCpuWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lose 🤦‍♂️🙆‍`;

}

function draw(userChoice, cpuChoice){
    userScore = userScore;  
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(cpuChoice)}${smallUserWord}.🤜🤛`;

}

function game(userChoice){
    const cpuChoice = getCpuChoice();
    
    switch (userChoice + cpuChoice){
        case "rs":
        case "pr":
        case "sp":
            win();           
            break;

        case "rp":
        case "ps":
        case "sr":
            lose();
            break;

        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })

}

main();

