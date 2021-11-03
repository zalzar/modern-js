console.log('-------------------Chapter 6 - DOM-------------------');







const para1 = document.querySelector('p');
console.log(para1);

const para2 = document.querySelector('.error');
console.log(para2);

const para3 = document.querySelector('div.error');
console.log(para3);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[1]);

paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelector('.error');
console.log(errors);
