const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');


const res = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    //if(correctAnswers===)
    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });
    
    res.querySelector('span').textContent = `${(100 / correctAnswers.length) * score} %`;
    // Another way to do above calculation is 
    //const span = document.querySelector('p span');
    //span.textContent = ((100 / correctAnswers.length) * score) + "%";

    res.classList.remove('d-none');
    
});