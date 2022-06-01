const toggleBtn = document.querySelector('.toggle-div-chan');
const menu = document.querySelector('.visible-links-chan');
const btn = document.querySelector('.toggle-btn-chan');
const navcon = document.querySelector('.navicon2');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('close');
    navcon.classList.toggle('hidden');
});

const arrowUp = document.querySelector('.arrow-up')
arrowUp.addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});


document.addEventListener('scroll', ()=>{
        if(window.scrollY > 0){
                
            arrowUp.classList.add('visible');
            
        }
        else {
            arrowUp.classList.remove('visible');
        }
    }

);

var cbox = document.getElementById("ac-toc");

var sidB = document.getElementsByClassName("homeis");

console.log(sidB);

window.onload = function(){

	// 자바스크립트
	if(document.querySelector(".checked-box")){
	    cbox.checked = true;
	}else{
	    cbox.checked = false;
	}


}