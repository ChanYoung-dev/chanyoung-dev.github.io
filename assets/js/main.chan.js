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

    
    
	// 자바스크립트
	if(document.querySelector(".checked-box")){
        
	    cbox.checked = true;
	}else{
	    cbox.checked = false;
	}

    

}

window.onresize = function() {
    if(checkbox.checked == true){
        console.log(window.innerWidth);
        if((window.innerWidth < 1024) && (window.innerWidth >= 900)){
            sidebar.style.width=175 + 'px';
            sidebar.style.paddingLeft = 20+'px';
            sidebar.style.paddingRight = 20+'px';
        }
        else if((window.innerWidth < 900) && (window.innerWidth >= 768)){
            sidebar.style.width=125 + 'px';
            sidebar.style.paddingLeft = 5+'px';
            sidebar.style.paddingRight = 5+'px';
        }
        else if(window.innerWidth < 768){
            sidebar.style.width=0 + 'px';
        }
        else{
            sidebar.style.width=200 + 'px';
            sidebar.style.paddingLeft = 20+'px';
            sidebar.style.paddingRight = 20+'px';
        }
        sidebar_element.style.marginTop='1em';
        sidebar_element.style.marginBottom='1em';
        
        checkbox_text.innerHTML="숨기기 ⇤"
    }
}

checkbox.addEventListener('click', ()=>{
    if(checkbox.checked == true){
        console.log(window.innerWidth);
        if((window.innerWidth < 1024) && (window.innerWidth >= 900)){
            sidebar.style.width=175 + 'px';
            sidebar.style.paddingLeft = 20+'px';
            sidebar.style.paddingRight = 20+'px';
        }
        else if((window.innerWidth < 900) && (window.innerWidth >= 768)){
            sidebar.style.width=125 + 'px';
            sidebar.style.paddingLeft = 5+'px';
            sidebar.style.paddingRight = 5+'px';
        }
        else if(window.innerWidth < 768){
            sidebar.style.width=0 + 'px';
        }
        else{
            sidebar.style.width=200 + 'px';
            sidebar.style.paddingLeft = 20+'px';
            sidebar.style.paddingRight = 20+'px';
        }
        sidebar_element.style.marginTop='1em';
        sidebar_element.style.marginBottom='1em';
        
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


/*
Abbr
========================================================================== */

const abbrBtns =  document.querySelectorAll("abbr");

abbrBtns.forEach((abbrBtn, index) => {
    var abbrContents = document.createElement('span');
    abbrContents.classList.add("hidden");
    abbrContents.classList.add("abbr_contents");
    abbrBtn.classList.add("hidden_before");
    var addrText = document.createTextNode( abbrBtn.id );
    abbrContents.appendChild(addrText);
    abbrBtn.appendChild(abbrContents);

    abbrBtn.addEventListener('mouseover', () => {
        childabbr = abbrBtn.children[0];
        childabbr.classList.remove("hidden");
        abbrBtn.classList.remove("hidden_before");

    });

    abbrBtn.addEventListener('mouseout', () => {
        childabbr = abbrBtn.children[0];
        childabbr.classList.add("hidden");
        abbrBtn.classList.add("hidden_before");

        
    });
});