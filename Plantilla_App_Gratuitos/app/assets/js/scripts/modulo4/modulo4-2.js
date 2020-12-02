function sit1(){
    let buttonClasses = document.getElementById('sit1btn').classList
    let feedbackSpan = document.getElementById('feedbackSit1');
    let quantities = [
        document.getElementById('churros2').value,
        document.getElementById('churros3').value,
        document.getElementById('churros4').value,
        document.getElementById('churros5').value,
        document.getElementById('churros6').value,
        document.getElementById('churros7').value,
        document.getElementById('churros8').value
    ]
    
    let costs = [
        document.getElementById('cost2').value,
        document.getElementById('cost3').value,
        document.getElementById('cost4').value,
        document.getElementById('cost5').value,
        document.getElementById('cost6').value,
        document.getElementById('cost7').value,
        document.getElementById('cost8').value,
    ]
    let correctQuantities = true;
    let correctQty = 5;
    for (let i = 0; i < quantities.length; i++) {
        console.log(quantities[i]);
        if(correctQty != quantities[i]){
            correctQuantities = false;
            break;
        }
        correctQty++;
    }
    let correctCosts = true;
    let correctCost = 10;
    for (let i = 0; i < costs.length; i++) {
        if(correctCost != costs[i]){
            correctCosts = false;
            break;
        }
        correctCost += 2;
    }
    if(correctQuantities && correctCosts){
        correctBadge(buttonClasses, feedbackSpan);
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