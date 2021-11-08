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
    // // change an attribute
    // const link = document.querySelector('a');

    // console.log(link.getAttribute('href'));
    // link.setAttribute('href', 'https://www.facebook.com');
    // link.innerText = 'Facebook';
}

{
    // // change error to success

    // const mssg = document.querySelector('div.error');
    // console.log(mssg.getAttribute('class'));
    // mssg.setAttribute('class', 'Success');
    // console.log(mssg.getAttribute('class'));
    // mssg.innerText = 'Success';
}

{
    // const title = document.querySelector('h1');

    // //title.setAttribute('style','margin:50px;');

    // console.log(title.style);
    // console.log(title.style.color);
    // title.style.margin = '50px';
    // title.style.color = 'crimson';

    // title.style.fontSize = '60px';
    // title.style.margin = '';
}

{
    // console.log('-------------------Add/Remove Classes-------------------');

    // const content = document.querySelector('p');
    // console.log(content.classList);
    // content.classList.add('errorZ');
    // content.classList.remove('errorZ');
    // content.classList.add('successZ');
    // content.classList.toggle('successZ');
    // console.log('-------------------Add/Remove Classes tutorials-------------------');

    // const errSuc = document.querySelectorAll("p:not([class])")
    // errSuc.forEach(es => {
    //     if (es.textContent.includes('success')) {
    //         es.classList.add('successZ');
    //     } else if (es.textContent.includes('error')) {
    //         es.classList.add('errorZ');
    //     }
    // });
    // console.log(errSuc);
}

{
    // //lesson 52
    // // to access children elements
    // const article = document.querySelector('article');
    // console.log(article.children);
    // console.log(Array.from(article.children));


    // Array.from(article.children).forEach(child => {
    //     child.classList.add('article-element');
    // });

    // // to access parent elements
    // const title = document.querySelector('h2');
    // console.log(title.parentElement);

    // // further parent
    // console.log(title.parentElement.parentElement);

    // // next sibling element
    // console.log(title.nextElementSibling);

    // // previous sibling element
    // console.log(title.previousElementSibling);

    // // chaining
    // console.log(title.nextElementSibling.parentElement.children);
}

{
    // //lesson 53
    // const button = document.querySelector('button');
    // // button.addEventListener('click',()=>{
    // //     console.log('I\'ve been clicked');
    // // });
    // const items = document.querySelectorAll('div.lesson53 li');
    // //console.log(items);

    // items.forEach(item => {
    //     item.addEventListener('click', e => {
    //         console.log(e);
    //         console.log(e.target);
    //         e.target.style.textDecoration = 'line-through';
    //     });
    // });
}

{
    // //lesson 54

    // const ul = document.querySelector('ul');
    // // ul.remove();

    // const button = document.querySelector('button');
    // button.addEventListener('click', () => {
    //     // we could do this:
    //     //ul.innerHTML += '<li>something new</li>';

    //     //or we could approach it this way:
    //     const li = document.createElement('li');
    //     li.textContent = 'Something new';
    //     //ul.append(li); //to add at the buttom
    //     ul.prepend(li); //to add at the top

    // });
    // // button.addEventListener('click',()=>{
    // //     console.log('I\'ve been clicked');
    // // });
    // const items = document.querySelectorAll('div.lesson53 li');
    // //console.log(items);

    // items.forEach(item => {
    //     item.addEventListener('click', e => {
    //         e.target.remove();
    //     });
    // });
}

{
    //lesson 55

    const ul = document.querySelector('ul');
    // ul.remove();

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        // we could do this:
        //ul.innerHTML += '<li>something new</li>';

        //or we could approach it this way:
        const li = document.createElement('li');
        li.textContent = 'Something new';
        ul.append(li); //to add at the buttom
        //ul.prepend(li); //to add at the top

    });
    // // button.addEventListener('click',()=>{
    // //     console.log('I\'ve been clicked');
    // // });
    // const items = document.querySelectorAll('div.lesson53 li');
    // //console.log(items);

    // items.forEach(item => {
    //     item.addEventListener('click', e => {
    //         e.target.remove();
    //         e.stopPropagation();
    //     });
    // });
    ul.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            e.target.remove();
        }
    });
}
{
    // lesson 56
    const copy = document.querySelector('.copy-me');
    copy.addEventListener('copy', () => {
        console.log('Oi, my contents is copyright');
    });

    const box = document.querySelector('.box');
    box.addEventListener('mousemove',e=>{
        //console.log(e);
        //console.log(e.offsetX);
        //console.log(e.offsetY);
        box.textContent=`x pos - ${e.offsetX} y pos - ${e.offsetY}`;

    });
}