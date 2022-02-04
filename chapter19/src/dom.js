console.log('coming from dom');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (newTitle) => {
    const title = document.createElement('h1');
    title.textContent = newTitle;
    body.appendChild(title);
};

const contact = 'ali.matrix.com';

export { styleBody, addTitle, contact }