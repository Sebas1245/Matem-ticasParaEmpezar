function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    const answers = document.querySelectorAll('input[name="Options"]');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }
    if(selectedValue == "optionC"){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit3(buttonClicked){
    let buttonClasses1 = document.getElementById('sit3btnCorrect').classList
    let buttonClasses2 = document.getElementById('sit3btnIncorrect').classList
    let feedbackSpan = document.getElementById('feedbackSit3');
    if(buttonClicked == 'correct'){
        incorrectBadge(buttonClasses2,feedbackSpan);
        correctBadge(buttonClasses1,feedbackSpan);
    }
    else {
        correctBadge(buttonClasses1,feedbackSpan);
        incorrectBadge(buttonClasses2,feedbackSpan);
    }
}

function sit4(){
    let buttonClasses = document.getElementById('sit4btn').classList
    let feedbackSpan = document.getElementById('feedbackSit4');
    const answers = document.querySelectorAll('input[name="Situation4"]');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }
    if(selectedValue == "no"){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses, feedbackSpan);
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