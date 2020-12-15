let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20 ;
let check = document.querySelector('.check');
let highscore = 0;
function message(message){
    document.querySelector('.message').textContent = message;
}
check.addEventListener('click',function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        
        message('No Number');
    }else if(guess === secretNumber){
        
        message('Correct Match');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '13rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
             highscore = score;
            document.querySelector('.highscore').textContent =  highscore;
        }
    }
        else if(score !== secretNumber){
            if(score > 1){
               
                guess > secretNumber ? message('number is too high') : message('number is too low');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = "you lost the game";
            }
        }
    
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20 ;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    message('Start Guessing...')
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})