function intro1(){
    let buttonClasses = document.getElementById('submitSquarePhrases').classList
    let feedbackSpan = document.getElementById('feedbackIntro1');
    let inCorrectAns1 = document.getElementById('phrase1').checked;
    let inCorrectAns2 = document.getElementById('phrase3').checked;
    let correctAns1 = document.getElementById('phrase2').checked;
    let correctAns2 = document.getElementById('phrase4').checked;
    if(correctAns1 && correctAns2 && !inCorrectAns1 && !inCorrectAns2) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function intro2(){
    let buttonClasses = document.getElementById('submitWhichAreSquares').classList
    let feedbackSpan = document.getElementById('feedbackIntro2');
    let inCorrectAns1 = document.getElementById('shape1').checked;
    let inCorrectAns2 = document.getElementById('shape3').checked;
    let inCorrectAns3 = document.getElementById('shape5').checked;
    let correctAns1 = document.getElementById('shape2').checked;
    let correctAns2 = document.getElementById('shape4').checked;
    if(correctAns1 && correctAns2 && !inCorrectAns1 && !inCorrectAns2 && !inCorrectAns3) {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit1_1(){
    let buttonClasses = document.getElementById('sit1-1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1-1');
    let answer = document.getElementById('game1').value;
    if(answer == 5){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit1_2(){
    let buttonClasses = document.getElementById('sit1-2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1-2');
    let answer = document.getElementById('game2').value;
    if(answer == 8){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit2(){
    let buttonClasses = document.getElementById('sit2btn').classList
    let feedbackSpan = document.getElementById('feedbackSit2');
    let shapes = [
        document.getElementById('draggable-1-1'),
        document.getElementById('draggable-2-1'),
        document.getElementById('draggable-3-1'),
        document.getElementById('draggable-3-1'),
        document.getElementById('draggable-4-2'),
        document.getElementById('draggable-5-2'),
        document.getElementById('draggable-6-2'),
        document.getElementById('draggable-8-3'),
        document.getElementById('draggable-9-3'),
        document.getElementById('draggable-10-2')
    ]
    let shapesNotReq = [
        document.getElementById('draggable-7'),
        document.getElementById('draggable-11')
    ]
    let shapeResults = shapes.map((shape) => {
        let shapeClasslist = shape.classList;
        console.log(shapeClasslist);
        return shapeClasslist[shapeClasslist.length-1] == 'correct-dropzone';
    })
    let shapesNotReqRes = shapesNotReq.map((shape) => {
        let shapeClasslist = shape.classList;
        console.log(shapeClasslist[shapeClasslist.length-1])
        return shapeClasslist[shapeClasslist.length-1] != 'incorrect-dropzone' ;
    })
    if(shapeResults.includes(false) || shapesNotReqRes.includes(false)) {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else{
        correctBadge(buttonClasses, feedbackSpan);
    }
}

function sit3_1(){
    let buttonClasses = document.getElementById('sit31btn').classList
    let feedbackSpan = document.getElementById('feedbackSit3-1');
    let similarity1 = document.getElementById('similarity1-1').checked;
    let similarity2 = document.getElementById('similarity2-1').checked;
    let similarity3 = document.getElementById('similarity3-1').checked;
    let similarity4 = document.getElementById('similarity4-1').checked;
    let similarity5 = document.getElementById('similarity5-1').checked;
    let difference1 = document.getElementById('difference1-1').checked;
    let difference2 = document.getElementById('difference2-1').checked;
    let difference3 = document.getElementById('difference3-1').checked;
    let difference4 = document.getElementById('difference4-1').checked;
    let difference5 = document.getElementById('difference5-1').checked;
    let similaritiesRes = !similarity1 && similarity2 && similarity3 && similarity4 && !similarity5;
    let differencesRes = difference1 && !difference2 && !difference3 && !difference4 && difference5;
    if(similaritiesRes && differencesRes){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit3_2(){
    let buttonClasses = document.getElementById('sit32btn').classList
    let feedbackSpan = document.getElementById('feedbackSit3-2');
    let similarity1 = document.getElementById('similarity1-2').checked;
    let similarity2 = document.getElementById('similarity2-2').checked;
    let similarity3 = document.getElementById('similarity3-2').checked;
    let similarity4 = document.getElementById('similarity4-2').checked;
    let difference1 = document.getElementById('difference1-2').checked;
    let difference2 = document.getElementById('difference2-2').checked;
    let difference3 = document.getElementById('difference3-2').checked;
    let difference4 = document.getElementById('difference4-2').checked;
    let similaritiesRes = !similarity1 && similarity2 && !similarity3 && !similarity4; 
    let differencesRes = difference1 && !difference2 && difference3 && difference4;
    if(similaritiesRes && differencesRes){
        correctBadge(buttonClasses, feedbackSpan);
    }
    else{
        incorrectBadge(buttonClasses, feedbackSpan);
    }
}

function sit4(){
    let buttonClasses = document.getElementById('sit4btn').classList
    let feedbackSpan = document.getElementById('feedbackSit4');
    let reqStatements = [
        document.getElementById('draggable-12-6'),
        document.getElementById('draggable-15-4'),
        document.getElementById('draggable-16-5'),
        document.getElementById('draggable-17-6'),
        document.getElementById('draggable-18-4'),
        document.getElementById('draggable-19-5'),
        document.getElementById('draggable-20-4'),
    ]
    let notReqStatements = [
        document.getElementById('draggable-13-7'),
        document.getElementById('draggable-14-7'),
    ]
    let statementsReqResults = reqStatements.map((statement) => {
        let statementClasslist = statement.classList;
        console.log(statementClasslist);
        return statementClasslist[statementClasslist.length-1] == 'correct-dropzone';
    })
    let statementsNotReqRes = notReqStatements.map((statement) => {
        let statementClasslist = statement.classList;
        console.log(statementClasslist[statementClasslist.length-1])
        return statementClasslist[statementClasslist.length-1] != 'incorrect-dropzone' ;
    })
    if(statementsNotReqRes.includes(false) || statementsReqResults.includes(false)) {
        incorrectBadge(buttonClasses, feedbackSpan);
    }
    else{
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