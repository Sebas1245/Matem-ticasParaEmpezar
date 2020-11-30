function checkSit1(){
    let priceOf4 = document.getElementById('priceOf4').value;
    let priceOf5 = document.getElementById('priceOf5').value;
    let priceOf6 = document.getElementById('priceOf6').value;
    let amountOf7 = document.getElementById('amountOf7').value;
    let amountOf10 = document.getElementById('amountOf10').value;
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    if(priceOf4 == '12' && priceOf5 == '15' && priceOf6 == '18' && amountOf7 == '7' && amountOf10 == '10'){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}

function sit2() {
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    const answers1 = document.querySelectorAll('input[name="question1"]');
    const answers2 = document.querySelectorAll('input[name="question2"]');
    const answers3 = document.querySelectorAll('input[name="question3"]');
    let selectedValue1;
    let selectedValue2;
    let selectedValue3;
    for (const answer of answers1) {
        if (answer.checked) {
            selectedValue1 = answer.value;
            break;
        }
    }
    for (const answer of answers2) {
        if (answer.checked) {
            selectedValue2 = answer.value;
            break;
        }
    }
    for (const answer of answers3) {
        if (answer.checked) {
            selectedValue3 = answer.value;
            break;
        }
    }
    if(selectedValue1 == "yes" && selectedValue2 == "yes" && selectedValue3 == "yes"){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function checkSit3(){
    let commission1 = document.getElementById('commission1').value;
    let commission2 = document.getElementById('commission2').value;
    let commission3 = document.getElementById('commission3').value;
    let commission4 = document.getElementById('commission4').value;
    let commission5 = document.getElementById('commission5').value;
    let commission6 = document.getElementById('commission6').value;
    let commission7 = document.getElementById('commission7').value;
    let buttonClasses = document.getElementById('sit3btn').classList
    let feedbackSpan = document.getElementById('feedbackSit3');
    if(commission1 == '2' && commission2 == '4' && commission3 == '8' && commission4 == '300' && commission5 == '14' && commission6 == '18' && commission7 == '20'){
        correctBadge(buttonClasses,feedbackSpan);
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