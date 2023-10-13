const btnEl = document.querySelector('button');

btnEl.addEventListener('click' , function(){

    document.getElementById('visual').innerHTML = '';

    const firstArrayLength = document.getElementById('first').value;
    const secondArrayLength = document.getElementById('second').value;

    const firstList = [];
    const secondList = [];

    for(let i = 0 ; i < firstArrayLength ; i++){
        firstList.push(getRndInteger(1 , 100)) ;
    }
    console.log(firstList);

    for(let i = 0 ; i < secondArrayLength ; i++){
        secondList.push(getRndInteger(1 , 100)) ;
    }
    console.log(secondList);

    if(firstList.length > secondList.length){

        let difference = firstList.length -  secondList.length;

        for(let i = 0 ; i < difference ; i++){
            secondList.push(getRndInteger(1 , 100)) ;
        }
    }else if(firstList.length < secondList.length){

        let difference = secondList.length -  firstList.length

        for(let i = 0 ; i < difference ; i++){
            firstList.push(getRndInteger(1 , 100)) ;
        }
    }
        document.getElementById('visual').innerHTML += firstList;
        document.getElementById('visual').innerHTML += '<br>' + secondList;

        console.log(firstList);
        console.log(secondList);
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}