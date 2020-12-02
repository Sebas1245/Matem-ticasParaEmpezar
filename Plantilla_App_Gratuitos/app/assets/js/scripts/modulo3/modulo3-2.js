function intro1(){
    let buttonClasses = document.getElementById('intro1btn').classList
    let feedbackSpan = document.getElementById('feedbackIntro1');
    const answers = document.querySelectorAll('input[name="Intro1"]');
    const correctAnswers = [55,101,110,87,96,65];
    let questionCorrect = true;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].value != correctAnswers[i]) {
            questionCorrect = false;
            break;
        }
    }
    if(questionCorrect){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}

function intro2(){
    let buttonClasses = document.getElementById('intro2btn').classList
    let feedbackSpan = document.getElementById('feedbackIntro2');
    const answers1 = document.querySelectorAll('input[name="introQuestion1"]');
    const answers2 = document.querySelectorAll('input[name="introQuestion2"]');
    const answers3 = document.querySelectorAll('input[name="introQuestion3"]');
    const answers4 = document.querySelectorAll('input[name="introQuestion4"]');
    let selectedValue1;
    let selectedValue2;
    let selectedValue3;
    let selectedValue4;
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
    for (const answer of answers4) {
        if (answer.checked) {
            selectedValue4 = answer.value;
            break;
        }
    }
    if(selectedValue1 == "no" || selectedValue2 == "no" || selectedValue3 == "no" || selectedValue4 == "no"){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let qtys = [
        document.getElementById('qty1'),
        document.getElementById('qty2'),
        document.getElementById('qty3'),
        document.getElementById('qty4'),
        document.getElementById('qty5'),
        document.getElementById('qty6')
    ]
    let qtysRes = qtys.map((qty) => {
        let qtyClasslist = qty.classList;
        console.log(qtyClasslist.contains("correct-dropzone"));
        return qtyClasslist.contains("correct-dropzone");
    })
    console.log(qtysRes);
    if(qtysRes.includes(false)){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    const answers = document.querySelectorAll('input[name="questionSituation2"]');
    const correctAns = ["6", "2", "7"];
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