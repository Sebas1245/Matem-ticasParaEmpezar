function intro(){
    let buttonClasses = document.getElementById('introbtn').classList
    let feedbackSpan = document.getElementById('feedbackIntro');
    let ans1 = document.getElementById('ribbon').checked;
    let ans2 = document.getElementById('embroidered').checked;
    let ans3 = document.getElementById('button').checked;
    let ans4 = document.getElementById('elastic').checked;
    let ans5 = document.getElementById('scissors').checked;
    let ans6 = document.getElementById('espiguilla').checked;
    if(ans1 && ans2 && !ans3 && ans4 && !ans5 && ans6) {
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit1() {
    // 3, 1, 6 y 2
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let ans1 = document.getElementById('piece1').value;
    let ans2 = document.getElementById('piece2').value;
    let ans3 = document.getElementById('piece3').value;
    let ans4 = document.getElementById('piece4').value;
    if(ans1 == 4 && ans2 == 2 && ans3 == 1 && ans4 == 3) {
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan); 
    }
}

function correctBadge(buttonClasses, feedbackSpan){
    if(buttonClasses.contains('btn-primary')){
        buttonClasses.remove('btn-primary');
    }
    else if(buttonClasses.contains('btn-danger')){
        buttonClasses.remove('btn-danger');
    }
    if(feedbackSpan.classList.contains('badge-danger')){
        feedbackSpan.classList.remove('badge-danger');
    }
    buttonClasses.add('btn-success');
    feedbackSpan.classList.add('badge-success');
    if(feedbackSpan.childNodes.length == 0){
        feedbackSpan.append('¡Correcto!');
        feedbackSpan.style.display = 'block';
    }
    else if(feedbackSpan.childNodes.length == 1 && feedbackSpan.childNodes[0].data == '¡Inténtalo de nuevo!'){
        feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
        feedbackSpan.append('¡Correcto!');
        feedbackSpan.style.display = 'block';
    }
    else{
        feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
        feedbackSpan.style.display = 'none';        
    }
}

function incorrectBadge(buttonClasses, feedbackSpan){
    if(buttonClasses.contains('btn-primary')){
        buttonClasses.remove('btn-primary');
    }
    else if(buttonClasses.contains('btn-success')){
        buttonClasses.remove('btn-success');
    }
    if(feedbackSpan.classList.contains('badge-success')){
        feedbackSpan.classList.remove('bage-success');
    }
    buttonClasses.add('btn-danger');
    feedbackSpan.classList.add('badge-danger');
    if(feedbackSpan.childNodes.length == 0){
        feedbackSpan.append('¡Inténtalo de nuevo!');
        feedbackSpan.style.display = 'block';
    }
    else if(feedbackSpan.childNodes.length == 1 && feedbackSpan.childNodes[0].data == '¡Correcto!'){
        feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
        feedbackSpan.append('Inténtalo de nuevo!');
        feedbackSpan.style.display = 'block';
    }
    else{
        feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
        feedbackSpan.style.display = 'none';        
    }
}