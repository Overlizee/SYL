function checkCode(){
    var code = document.getElementById("latitude").value;
    console.log(code);

    if ((code == "Blaireau") || (code == "blaireau") || (code == " Blaireau") || (code == "Blaireau ") || (code == " blaireau") || (code == "blaireau ")){
        window.location.href = "jeu3.html";

    
    }
    else{
        var element = document.getElementById("wrong_answer");
        element.classList.remove("wrong_answer");

    }
}


function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.002;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 160)
        }
    };
    tick();
}

function zoomIn(el) {
    var width = 55;
    var marginleft = 0;
    var margintop = 0;
    var tick = function () {
        width = + width + 1;
        marginleft = +marginleft - 0.875;
        margintop = +margintop - 0.23;
        if (+width <300) {
            var str_width = width.toString() +'vw';
            var str_marginleft = marginleft.toString() +'vw';
            var str_margintop = margintop.toString() +'vw';
            el.style.width = str_width;
            el.style.marginLeft  = str_marginleft;
            el.style.marginTop  = str_margintop;
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 160)

        }
    };
    tick();
}

function wrong_answer(id){
    var button = document.getElementById(id);
    button.classList.add("wrong_digicode_button");
    setTimeout(() => { window.location.href = "digicode1.html"; }, 1000);
}

function correct_answer1(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode2.html";}, 500);
}

function correct_answer2(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode3.html";}, 500);
}

function correct_answer3(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode4.html";}, 500);
}

function correct_answer4(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode5.html";}, 500);
}

function correct_answer5(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode6.html";}, 500);
}

function correct_answer6(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode7.html";}, 500);
}

function correct_answer7(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    setTimeout(() => {window.location.href = "digicode8.html";}, 500);
}


function correct_answer8(id){
    var button = document.getElementById(id);
    button.classList.add("correct_digicode_button");
    var status4 = document.getElementById("status8");
    status4.classList.add("status_on");
    
    setTimeout(() => {window.location.href = "fin.html";}, 500);
}


window.onload = start_page;