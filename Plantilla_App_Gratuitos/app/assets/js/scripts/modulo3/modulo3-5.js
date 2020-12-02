function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    const ans1 = document.getElementById('question1').value;
    const ans2 = document.getElementById('question2').value;
    const ans3 = document.getElementById('question3').value;
    if(ans1 == "3/4" && ans2 == "1/4" && ans3 == "75") {
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }

}

function sit2_1(){
    let buttonClasses = document.getElementById('sit21btn').classList
    let feedbackSpan = document.getElementById('feedbackSit21');
    const ans1 = document.getElementById('fraction1-1').value;
    const ans2 = document.getElementById('fraction1-2').value;
    const oneHalf = ans1 == "1" && ans2 == "2";
    const twoQuarters = ans1 == "2" && ans2 == "4";
    if(oneHalf || twoQuarters){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}
function sit2_2(){
    let buttonClasses = document.getElementById('sit22btn').classList
    let feedbackSpan = document.getElementById('feedbackSit22');
    const ans1 = document.getElementById('metersRepaired1').value;
    if(ans1 == "50"){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}
function sit2_3(){
    let buttonClasses = document.getElementById('sit23btn').classList
    let feedbackSpan = document.getElementById('feedbackSit23');
    const ans1 = document.getElementById('fraction2-1').value;
    const ans2 = document.getElementById('fraction2-2').value;
    const oneHalf = ans1 == "1" && ans2 == "2";
    const twoQuarters = ans1 == "2" && ans2 == "4";
    if(oneHalf || twoQuarters){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}
function sit2_4(){
    let buttonClasses = document.getElementById('sit24btn').classList
    let feedbackSpan = document.getElementById('feedbackSit24');
    const ans1 = document.getElementById('metersRepaired2').value;
    if(ans1 == "50"){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
        incorrectBadge(buttonClasses,feedbackSpan);
    }
}
function sit2_5(){
    let buttonClasses = document.getElementById('sit25btn').classList
    let feedbackSpan = document.getElementById('feedbackSit25');
    const answers = document.querySelectorAll('input[name="repairComp"]');
    let selectedValue;
    for (const answer of answers) {
        if (answer.checked) {
            selectedValue = answer.value;
            break;
        }
    }
    if(selectedValue == "yes"){
        correctBadge(buttonClasses,feedbackSpan);
    }
    else {
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