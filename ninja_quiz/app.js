// // lesson 68 - Showing the Score
// {
//     const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
//     const form = document.querySelector('.quiz-form');
//     const res = document.querySelector('.result');

//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         let score = 0;
//         const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

//         // check answers
//         userAnswers.forEach((answer, index) => {
//             if (answer === correctAnswers[index]) {
//                 score += 1;
//             }
//         });

//         res.querySelector('span').textContent = `${(100 / correctAnswers.length) * score} %`;
//         // Another way to do above calculation is: 
//         //const span = document.querySelector('p span');
//         //span.textContent = ((100 / correctAnswers.length) * score) + "%";

//         res.classList.remove('d-none');
//     });
// }

// // lesson 69 - The Window Object
// {
//     const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
//     const form = document.querySelector('.quiz-form');
//     const res = document.querySelector('.result');

//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         let score = 0;
//         const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

//         // check answers
//         userAnswers.forEach((answer, index) => {
//             if (answer === correctAnswers[index]) {
//                 score += 1;
//             }
//         });

//         res.querySelector('span').textContent = `${(100 / correctAnswers.length) * score} %`;
//         res.classList.remove('d-none');
//         scrollTo(0,0);
//     });
// }

// lesson 70 - Intervals & Animating the Score
{
    const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
    const form = document.querySelector('.quiz-form');
    const res = document.querySelector('.result');

    form.addEventListener('submit', e => {
        e.preventDefault();

        let score = 0;
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

        // check answers
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score += 1;
            }
        });

        score = (100 / correctAnswers.length) * score;

        scrollTo(0, 0);

        res.classList.remove('d-none');

        let output = 0;
        const timer = setInterval(() => {
            res.querySelector('span').textContent = `${output}%`;
            if (output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 10);
    });

    // // how set interval works
    // let i = 0;
    // const timer = setInterval(() => {
    //     i++;
    //     if (i === 5) {
    //         clearInterval(timer);
    //     }
    // }, 1000);

}