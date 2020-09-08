const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
const wrapper = document.getElementById('wrapper');

function removeRight(){
    buttonRight.style.opacity = '0';
    buttonRight.style.zIndex = '-1';
}

function removeLeft(){
    buttonLeft.style.opacity = '0';
    buttonLeft.style.zIndex = '-1';
}

function showLeft(){
    buttonLeft.style.opacity = '.9';
    buttonLeft.style.zIndex = '5';
}

function showRight(){
    buttonRight.style.opacity = '.9';
    buttonRight.style.zIndex = '5';
}

buttonRight.onclick = function () {
    showLeft();
    if(1173 - wrapper.scrollLeft <= 300){
        wrapper.scrollLeft += 300;
        removeRight();
    }
    else{
        wrapper.scrollLeft += 300;
    }
    
};

buttonLeft.onclick = function () {
    showRight();
    if(wrapper.scrollLeft <= 300){
        wrapper.scrollLeft -= 300;
        removeLeft();
    }
    else{
        wrapper.scrollLeft -= 300;
    }
};