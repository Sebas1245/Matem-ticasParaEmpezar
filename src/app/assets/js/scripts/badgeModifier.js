export default function badgeModifier(buttonClasses, feedbackSpan, correct){
    if(correct){
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
        else{
            feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
            feedbackSpan.style.display = 'none';        
        }
    }
    else{
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
        else{
            feedbackSpan.removeChild(feedbackSpan.childNodes[0]);
            feedbackSpan.style.display = 'none';        
        }
    }
}
