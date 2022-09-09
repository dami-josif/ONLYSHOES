const all = document.querySelector('.all');
const nike = document.querySelector('.nike');
const puma = document.querySelector('.puma');
const adidas = document.querySelector('.adidas');
const reeboks = document.querySelector('.reeboks');
const allnike = document.querySelector('.allnike');
const allpuma = document.querySelector('.allpuma');
const alladidas = document.querySelector('.alladidas');
const allreeboks = document.querySelector('.allreeboks');


allnike.classList.add('d-none');
allpuma.classList.add('d-none');
alladidas.classList.add('d-none');
allreeboks.classList.add('d-none');

all.addEventListener('click',()=>{
    allnike.classList.remove('d-none');
    allpuma.classList.remove('d-none');
    alladidas.classList.remove('d-none');
    allreeboks.classList.remove('d-none');
});

nike.addEventListener('click',()=>{
    allnike.classList.remove('d-none');
    allpuma.classList.add('d-none');
    alladidas.classList.add('d-none');
    allreeboks.classList.add('d-none');
});

puma.addEventListener('click',()=>{
    allnike.classList.add('d-none');
    allpuma.classList.remove('d-none');
    alladidas.classList.add('d-none');
    allreeboks.classList.add('d-none');
});

adidas.addEventListener('click',()=>{
    allnike.classList.add('d-none');
    allpuma.classList.add('d-none');
    alladidas.classList.remove('d-none');
    allreeboks.classList.add('d-none');
});

reeboks.addEventListener('click',()=>{
    allnike.classList.add('d-none');
    allpuma.classList.add('d-none');
    alladidas.classList.add('d-none');
    allreeboks.classList.remove('d-none');
});