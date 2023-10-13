const btnEl = document.querySelector('button');

btnEl.addEventListener('click' , function(){
    const numElementi = parseInt(document.getElementById('number-elements').value) ;
    const screenElementi = parseInt(document.getElementById('visual-elements').value) ;

    const visual = document.getElementById('visual') ;

    visual.className = 'p-4 mt-4 fs-3 bg-warning d-none';

    if(isNaN(numElementi) || isNaN(screenElementi)){
        visual.innerHTML = 'I valori inseriti non solo validi' ;
    }else if(numElementi < screenElementi){
        visual.innerHTML = 'Il numero di elementi da inserire non può essere minore del numero di elementi da visualizzare' ;
    }
    else{

        const elementi = [] ;

        for(let i = 0 ; i < numElementi ; i++){
            elementi.push(getRndInteger(1 , 100)) ;
        }

        const numDaStampare = elementi.slice(- screenElementi);
        
        visual.innerHTML = numDaStampare ;
    }

    visual.classList.remove('d-none') ;

    document.querySelector('.container').append(visual);
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }