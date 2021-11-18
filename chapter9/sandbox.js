console.log('-------------------Chapter 8 - Array Methods-------------------');

// console.log('-------------------71. Filter Method-------------------');
{
    // const scores = [10, 30, 15, 25, 50, 40, 5];

    // // const filteredScores = scores.filter((score) => {
    // //     return score > 20;
    // // });

    // // console.log(filteredScores);
    // // console.log(scores);

    // const users = [
    //     { name: 'Ali', premium: true },
    //     { name: 'Ruhi', premium: false },
    //     { name: 'Bella', premium: false },
    //     { name: 'Marko', premium: true }
    // ];


    // const premiumUsers = users.filter(user => user.premium);
    // console.log(premiumUsers);

    //     const scores = [10, 30, 15, 25, 50, 40, 5];

    //     // const filteredScores = scores.filter((score) => {
    //     //     return score > 20;
    //     // });

    //     // console.log(filteredScores);
    //     // console.log(scores);

    //     const users = [
    //         { name: 'Ali', premium: true },
    //         { name: 'Ruhi', premium: false },
    //         { name: 'Bella', premium: false },
    //         { name: 'Marko', premium: true }
    //     ];

    //     const premiumUsers = users.filter(user => user.premium);
    //     console.log(premiumUsers);
}

// // console.log('-------------------72. Map Method-------------------');
// {
//     // const prices = [20, 10, 30, 25, 15, 40, 80, 5];
//     // const salePrices = prices.map(price => price / 2);
//     // console.log(prices);
//     // console.log(salePrices);

//     const products = [
//         { name: 'gold star', price: 20 },
//         { name: 'mushroom', price: 40 },
//         { name: 'green shells', price: 30 },
//         { name: 'banana skin', price: 10 },
//         { name: 'red shells', price: 50 }
//     ];
//     const saleProducts = products.map(product => {
//         if (product.price > 30) {
//             return { name: product.name, price: product.price / 2 };
//         } else {
//             return product;
//         }
//     });
//     console.log(saleProducts, products)
// }

// // console.log('-------------------73. Reduce Method-------------------');
// {
//     // const scores = [10, 20, 60, 40, 70, 90, 30];
//     // const result = scores.reduce((accumulator, current) => {
//     //     if (current > 50) {
//     //         accumulator++;
//     //     }
//     //     return accumulator;
//     // }, 0);

//     // console.log(result);

//     const scores = [
//         { player: 'mario', score: 50 },
//         { player: 'yoshi', score: 30 },
//         { player: 'mario', score: 70 },
//         { player: 'crystal', score: 60 }
//     ];
//     const marioTotal = scores.reduce((accumulator, current) => {
//         if (current.player==='mario') {
//             accumulator+=current.score;
//         }
//         return accumulator;
//     }, 0);
//     console.log(marioTotal);
// }

// console.log('-------------------74. Find Method-------------------');
{
    const scores = [10, 5, 0, 40, 30, 10, 90, 70];
    const firstHighScore = scores.find(score => score > 50);
    console.log(firstHighScore);
}
