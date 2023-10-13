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
    frigoEl.innerHTML += '<br>' + frigorifero[i];
}

pesca.addEventListener('click' , function(){
    pesca.className= 'spostare'
    frigorifero.push('pesca');
    document.querySelector('ol li:first-child').classList.add('done')
})
