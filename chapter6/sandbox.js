console.log('-------------------Chapter 6 - DOM-------------------');
{
    // const para1 = document.querySelector('p');
    // console.log(para1);

    // const para2 = document.querySelector('.error');
    // console.log(para2);

    // const para3 = document.querySelector('div.error');
    // console.log(para3);

    // const paras = document.querySelectorAll('p');
    // console.log(paras);
    // console.log(paras[1]);

    // paras.forEach(para => {
    //     console.log(para);
    // });

    // const errors = document.querySelector('.error');
    // console.log(errors);
}


{
    // console.log('-------------------Get elements by-------------------');

    // // get an element by ID
    // const tittle = document.getElementById('page-title');
    // console.log(tittle);

    // // get elements by their class name
    // const errors = document.getElementsByClassName('.error');
    // console.log(errors);
    // console.log(errors[0]);

    // // get elements by their tag name
    // const paras = document.getElementsByTagName('p');
    // console.log(paras);
    // console.log(paras[0]);
}

{
    // console.log('-------------------Change the text inside HTML-------------------');

    // const para = document.querySelector('p');
    // console.log(para.innerText);

    // para.innerText = 'this text was changed by js';

    // const paras = document.querySelectorAll('p');
    // paras.forEach(para => {
    //     //console.log(para.innerText);
    //     para.innerText += '. new text from js';
    //     console.log(para.innerText);

    // });
}

{
    // console.log('-------------------Change the HTML of page-------------------');

    // const content = document.querySelector('.content');
    // content.innerHTML += '<h2>This is a new h2</h2>';
}

{
    // console.log('-------------------Change the HTML of page-------------------');
    // const content = document.querySelector('.content');

    // const people = ['Ali', 'Rali', 'Luigi'];

    // people.forEach(person => {
    //     content.innerHTML += `<p>${person}</p>`;
    // });
}

{
    // change an attribute
    const link = document.querySelector('a');

    console.log(link.getAttribute('href'));
    link.setAttribute('href', 'https://www.facebook.com');
    link.innerText = 'Facebook';
}

{
    // change error to success

    const mssg = document.querySelector('div.error');
    console.log(mssg.getAttribute('class'));
    mssg.setAttribute('class', 'Success');
    console.log(mssg.getAttribute('class'));
    mssg.innerText = 'Success';
}

{
    const title = document.querySelector('h1');

    //title.setAttribute('style','margin:50px;');

    console.log(title.style);
    console.log(title.style.color);
    title.style.margin = '50px';
    title.style.color = 'crimson';

    title.style.fontSize = '60px';
    title.style.margin = '';
}

{
    console.log('-------------------Add/Remove Classes-------------------');

    const content = document.querySelector('p');
    console.log(content.classList);
    content.classList.add('errorZ');
    content.classList.remove('errorZ');
    content.classList.add('successZ');
    content.classList.toggle('successZ');
    console.log('-------------------Add/Remove Classes tutorials-------------------');
    
    const errSuc = document.querySelectorAll("p:not([class])")
    errSuc.forEach(es => {
        if (es.textContent.includes('success')) {
            es.classList.add('successZ');
        }else if(es.textContent.includes('error')) {
            es.classList.add('errorZ');
        }
    });
    console.log(errSuc);
}

