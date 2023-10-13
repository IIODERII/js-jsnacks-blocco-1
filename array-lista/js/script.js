// parte per mattere la pesca in frigo

const tavoloEl = document.querySelector('.tavolo');
const frigoEl = document.querySelector('.frigo');

let frigorifero= [
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero', 
    'limone',
    'fragola' 
];

const pesca = document.querySelector('.tavolo span')

for(let i = 0 ; i < frigorifero.length ; i++){
    frigoEl.innerHTML += '<div>' + frigorifero[i] + '</div>' ;
}

pesca.addEventListener('click' , function(){
    pesca.className= 'spostare'
    frigorifero.push('pesca');
    document.querySelector('ol li:first-child').classList.add('done')

    frigoEl.innerHTML += '<div>' + frigorifero[frigorifero.length-1] + '</div>' ;


})

// parte per cercare il melone

const cercatoreCocomeri = document.querySelector('button');
const message = document.createElement('div');

cercatoreCocomeri.addEventListener('click' , function(){

    message.className = 'p-4 m-5 fs-2 fw-bold';

    frigoEl.innerHTML = ''

    document.querySelector('ol li:nth-child(2)').classList.add('done')

    let trovato = false ;
    for(let i = 0 ; i < frigorifero.length ; i++){
        if(frigorifero[i] === 'cocomero'){
            frigoEl.innerHTML += '<div class="text-danger">' + frigorifero[i] + '</div>' ;
            trovato = true
        }else{
            frigoEl.innerHTML += '<div>' + frigorifero[i] + '</div>' ;
        }
    }

    if(trovato){
        message.innerText = 'Trovato! Devo solo preparare il cocktail.'
        message.classList.add('bg-success');
    }else{
        message.innerText = 'Oh no, devo uscire a comprare il cocomero!'
        message.classList.add('bg-danger');
    }

    document.querySelector('body').append(message);
})

const noCocomero = document.querySelector('h3');

noCocomero.addEventListener('click' , function(){
    for(let i = 0 ; i < frigorifero.length ; i++){
        if(frigorifero[i] === 'cocomero'){
            frigorifero.splice(i , 1);
        }
    }

    frigoEl.innerHTML = '' ;

    for(let i = 0 ; i < frigorifero.length ; i++){
        frigoEl.innerHTML += '<div>' + frigorifero[i] + '</div>' ;
    }
})
