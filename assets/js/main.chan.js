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
var checkbox = document.getElementById("ac-toc");
var checkbox_text = document.getElementById("ac-toc-text");
var sidebar= document.querySelector(".sidebar.checked-box")
var sidebar_element = document.querySelector(".nav__list")

window.onload = function(){

    console.log(sidebar_element);
    
	// 자바스크립트
	if(document.querySelector(".checked-box")){
	    cbox.checked = true;
	}else{
	    cbox.checked = false;
	}

    if(checkbox.checked == true){
        sidebar.style.width=200 + 'px';
    }else{
        sidebar.style.width=50 + 'px';
    }

}

checkbox.addEventListener('click', ()=>{
    if(checkbox.checked == true){
        sidebar.style.width=200 + 'px';
        sidebar.style.paddingLeft = 20+'px';
        sidebar.style.paddingRight = 20+'px';
        sidebar_element.style.marginTop='1em';
        sidebar_element.style.marginBottom='1em';
        sidebar.style.bottom= '2em';
        checkbox_text.innerHTML="숨기기 ⇤"
    }else{
        sidebar.style.width=50 + 'px';
        sidebar.style.padding = 0+'px';
        sidebar_element.style.margin='0px';
        checkbox_text.innerHTML="카테고리 ⇥"
        sidebar.style.bottom= 'auto';
    }
}

);