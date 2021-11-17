const scores = [10, 30, 15, 25, 50, 40, 5];



// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);
// console.log(scores);


const users = [
    { name: 'Ali', premium: true },
    { name: 'Ruhi', premium: false },
    { name: 'Bella', premium: false },
    { name: 'Marko', premium: true }
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);
