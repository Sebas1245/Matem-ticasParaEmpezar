function intro() {
    let buttonClasses = document.getElementById('introbtn').classList
    let feedbackSpan = document.getElementById('feedbackIntro');
    let answers = [
        document.getElementById('half1'),
        document.getElementById('double2'),
    ]
    let answerResult = answers.map((answer) => {
        let answerClasslist = answer.classList;
        console.log(answerClasslist.contains("correct-dropzone"));
        return answerClasslist.contains("correct-dropzone");
    })
    if(answerResult.includes(false)){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let answers = [
        document.getElementById('answer1-2'),
        document.getElementById('answer2-3'),
        document.getElementById('answer3-4'),
        document.getElementById('answer4-1'),
        document.getElementById('answer5-3')
    ]
    let answersRes = answers.map((answer) => {
        let answerClasslist = answer.classList;
        console.log(answerClasslist);
        return answerClasslist[answerClasslist.length-1] == 'correct-dropzone';
    })
    if(answersRes.includes(false)){
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