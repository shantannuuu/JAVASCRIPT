let show_modal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let close_modal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
console.log(show_modal);
for(let i = 0 ; i < show_modal.length ; i++){
    console.log(show_modal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        
        overlay.classList.remove('hidden');
    }));
}

const addClass = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

close_modal.addEventListener('click', addClass)

overlay.addEventListener('click',addClass)

document.addEventListener('keydown',function(e){
    console.log(e.key)
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        
            addClass();
        
    }
})


