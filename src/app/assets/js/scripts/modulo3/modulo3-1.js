function intro(){
    let buttonClasses = document.getElementById('introbtn').classList
    let feedbackSpan = document.getElementById('feedbackIntro');
    let reqPeople = [
        document.getElementById('SrGonzalez1'),   
        document.getElementById('SraMedina2'),   
        document.getElementById('SraRodriguez2'),   
        document.getElementById('SrPedroza3'),   
        document.getElementById('SraGuzman3')   
    ]
    console.log(reqPeople);
    let notReqPeople =  [ 
        document.getElementById('SrtaPineda'),
        document.getElementById('SrMartinez')
    ]
    let reqPeopleRes = reqPeople.map((person) => {
        let personClasslist = person.classList;
        console.log(personClasslist);
        return personClasslist[personClasslist.length-1] == 'correct-dropzone';
    })
    let notReqPeopleRes = notReqPeople.map((person) => {
        let personClasslist = person.classList;
        console.log(personClasslist);
        return personClasslist[personClasslist.length-1] == 'incorrect-dropzone';
    })
    const answers = document.querySelectorAll('input[name="Intro"]');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }
    if(!reqPeopleRes.includes(false) && !notReqPeopleRes.includes(false) && selectedValue == "yes") {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let turns = [
        document.getElementById('turn1'),
        document.getElementById('turn2'),
        document.getElementById('turn3'),
        document.getElementById('turn4'),
        document.getElementById('turn5'),
        document.getElementById('turn6'),
        document.getElementById('turn7')
    ]
    let turnsRes = turns.map((turn) => {
        let turnClasslist = turn.classList;
        console.log(turnClasslist);
        return turnClasslist[turnClasslist.length-1] == 'correct-dropzone';
    })
    if(turnsRes.includes(false)){
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else {
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    const answers = document.querySelectorAll('input[name="Situation2"]');
    const correctAnswers = [28,39,49,70,88,94,30,41,51,72,90,96];
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