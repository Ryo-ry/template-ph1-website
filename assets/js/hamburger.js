'use strict';

{
    const ham = document.querySelector('.hamburger');
    const item = document.querySelector('.item');
    const head__item = document.querySelectorAll('.pl');
    const batsu = document.querySelector('.batsu');
    const ham__con = document.querySelector('.hamburger--container-1')
    // console.log(item[0].innerHTML);
    ham.addEventListener('click',()=>{
        batsu.classList.add('visible');
        ham.classList.add('invisible');
        ham__con.classList.add('visible');
    })
    batsu.addEventListener('click',()=>{
        batsu.classList.remove('visible')
        ham.classList.remove('invisible');
        ham__con.classList.remove('visible');
    })
}