console.log('dom file');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'peachpuff';
}

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

<<<<<<< HEAD
const contact = 'ali@matrix.com';
=======
const contact = "neo@matrix.world";
>>>>>>> c908c72a20a4e06e112b1d873a5473d48eee72bd
export { styleBody, addTitle, contact };