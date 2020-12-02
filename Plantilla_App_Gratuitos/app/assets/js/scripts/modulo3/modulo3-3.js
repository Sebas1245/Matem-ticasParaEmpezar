function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let input = document.getElementById('howManyPssgrsAfter1').value;
    if(input == "19") {
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    let input = document.getElementById('howManyPssgrsAfter2').value;
    if(input == "19") {
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}
function sit3(){
    let buttonClasses = document.getElementById('sit3btn').classList
    let feedbackSpan = document.getElementById('feedbackSit3');
    let input = document.getElementById('howManyPssgrsAfter3').value;
    if(input == "21") {
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}

function sit4(){
    let buttonClasses = document.getElementById('sit4btn').classList
    let feedbackSpan = document.getElementById('feedbackSit4');
    const answers = document.querySelectorAll('input[name="questionSituation4"]');
    const correctAns = ["205", "210", "250", "275", "300"];
    let correctAnswer = true;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].value != correctAns[i]) {
            correctAnswer = false;
            break;
        }
    }

    if(correctAnswer) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan)
    }
}

function sit5(){
    let buttonClasses = document.getElementById('sit5btn').classList
    let feedbackSpan = document.getElementById('feedbackSit5');
    const answers = document.querySelectorAll('input[name="situation5"]');
    const correctAns = ["210","215", "220", "260", "285", "310"];
    let correctAnswer = true;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].value != correctAns[i]) {
            correctAnswer = false;
            break;
        }
    }

    if(correctAnswer) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan)
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