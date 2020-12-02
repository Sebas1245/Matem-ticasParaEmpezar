function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    const hour1 = document.getElementById('hourPicker1').value;
    const minutes1 = document.getElementById('minutePicker1').value;
    const dayTime1 = document.getElementById('dayTime1').value;
    const hour2 = document.getElementById('hourPicker2').value;
    const minutes2 = document.getElementById('minutePicker2').value;
    const dayTime2 = document.getElementById('dayTime2').value;
    const hour3 = document.getElementById('hourPicker3').value;
    const minutes3 = document.getElementById('minutePicker3').value;
    const dayTime3 = document.getElementById('dayTime3').value;
    const correctTime1 = hour1 == '6' && minutes1 == '45' && dayTime1 == 'morning';
    const correctTime2 = hour2 == '7' && minutes2 == '50' && dayTime2 == 'morning';
    const correctTime3 = hour3 == '8' && minutes3 == '0' && dayTime3 == 'morning';
    if(correctTime1 && correctTime2 && correctTime3){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    let hours = [
        document.getElementById('draggable1'),
        document.getElementById('draggable2'),
        document.getElementById('draggable3'),
    ]
    let hoursNotReq = [
        document.getElementById('draggable4'),
        document.getElementById('draggable5'),
        document.getElementById('draggable6')
    ]
    let hoursResults = hours.map((hour) => {
        let hourClasslist = hour.classList;
        console.log(hourClasslist);
        return hourClasslist[hourClasslist.length-1] == 'correct-dropzone';
    })
    let hoursNotReqRes = hoursNotReq.map((hour) => {
        let hourClasslist = hour.classList;
        console.log(hourClasslist[hourClasslist.length-1])
        return hourClasslist[hourClasslist.length-1] != 'incorrect-dropzone' ;
    })
    if(hoursResults.includes(false) || hoursNotReqRes.includes(false)) {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else{
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function conclusion(){
    let buttonClasses = document.getElementById('conclusionbtn').classList
    let feedbackSpan = document.getElementById('feedbackConclusion');
    const hours = document.getElementById('lupeHours').value;
    const minutes = document.getElementById('lupeMinutes').value;
    if(hours == '9' && minutes == '5') {
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