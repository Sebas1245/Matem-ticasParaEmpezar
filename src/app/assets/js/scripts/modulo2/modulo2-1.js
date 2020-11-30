function intro(){
    let buttonClasses = document.getElementById('introbtn').classList
    let feedbackSpan = document.getElementById('feedbackIntro');
    let ans1 = document.getElementById('cementOpt').checked;
    let ans2 = document.getElementById('boltsOpt').checked;
    let ans3 = document.getElementById('nailsOpt').checked;
    let ans4 = document.getElementById('tvOpt').checked;
    let ans5 = document.getElementById('beanOpt').checked;
    let ans6 = document.getElementById('locksOpt').checked;
    let ans7 = document.getElementById('clampsOpt').checked;
    let ans8 = document.getElementById('chairOpt').checked;
    let ans9 = document.getElementById('keysOpt').checked;
    let ans10 = document.getElementById('wireOpt').checked;
    if(!ans1 && ans2 && ans3 && !ans4 && !ans5 && ans6 && ans7 && !ans8 && ans9 && ans10) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    const answers = document.querySelectorAll('input[name="Nails"]');
    const correctAnswers = ["1,5,7", "2,4,6", "3,8"];
    let correct = true;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].value != correctAnswers[i]){
            correct = false;
            break;
        }
    }
    if(correct) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    const answers = document.querySelectorAll('input[name="Bolts"]');
    const correctAnswers = ["1,5,10", "4,8,9", "2,3,6,7"];
    let correct = true;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].value != correctAnswers[i]){
            correct = false;
            break;
        }
    }
    if(correct) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
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