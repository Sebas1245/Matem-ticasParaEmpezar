function intro(){
    let buttonClasses = document.getElementById('introBtn').classList
    let feedbackSpan = document.getElementById('feedbackIntro');
    buttonClasses.add('disabled');
    buttonClasses.add('btn-success');
    feedbackSpan.classList.add('badge-success');
    feedbackSpan.append('¡Excelente! Continúa con el resto de la actividad!');
    feedbackSpan.style.display = 'block';
}

function situation1() {
    let inCorrectAns1 = document.getElementById('option1-1').checked;
    let inCorrectAns2 = document.getElementById('option1-4').checked;
    let correctAns1 = document.getElementById('option1-2').checked;
    let correctAns2 = document.getElementById('option1-3').checked;
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    if(correctAns1 && correctAns2 && !inCorrectAns1 && !inCorrectAns2) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function situation2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    let mirrors = [document.getElementById('draggableMirror-1-1'),
                 document.getElementById('draggableMirror-2-2'),
                 document.getElementById('draggableMirror-3-2'),
                 document.getElementById('draggableMirror-4-3'),
                 document.getElementById('draggableMirror-5-1'),
                 document.getElementById('draggableMirror-6-3'),
                 document.getElementById('draggableMirror-7-3'),
                 document.getElementById('draggableMirror-8-3')]
    let mirrorResults = mirrors.map((mirror) => {
        let mirrorClasslist = mirror.classList;
        return mirrorClasslist[mirrorClasslist.length-1] == 'correct-dropzone';
    })
    
    if(mirrorResults.includes(false)){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses,feedbackSpan);
    }
}

function situation3(){
    let buttonClasses = document.getElementById('sit3btn').classList
    let feedbackSpan = document.getElementById('feedbackSit3');
    const answers = document.querySelectorAll('input[name="Similiarty"]');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }
    if(selectedValue == "yes"){
        correctBadge(buttonClasses, feedbackSpan);
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