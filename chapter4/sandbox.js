console.log('-------------------Chapter 4 - Functions-------------------');


// {
//     // -------------------intro to functions-------------------
//     console.log('-------------------intro to functions-------------------');
//     // 
//     const speak = function () {
//         console.log('good day!');
//     };
//     // 
//     speak();
//     greet();
//     // 
//     function greet() {
//         console.log('Hello there.');
//     };
//     // 
// }
// {
//     // -------------------arguments & parameters-------------------
//     console.log('-------------------arguments & parameters-------------------');
//     // 
//     const speak = function (name = 'luigi', time = 'night') {
//         // name='luigi', time='night' are default value in case user does not pass any value
//         console.log(`good ${time} ${name}`);
//     };
//     // 
//     speak('Ali', 'morning');
// }
{
    // -------------------returning values-------------------
    console.log('-------------------returning values-------------------');

    const calcArea = function (radius) {
        let area = 3.14 * radius ** 2;
        return (area);
    };

    // we can store it in a variable 
    const areaCalculated = calcArea(5);
    // or we can log it
    console.log('area is:', calcArea(5));
}
{
    // -------------------regular function-------------------
    console.log('-------------------regular function-------------------');
    const calcArea = function (radius) {
        return area = 3.14 * radius ** 2;
    };
    console.log('area is:', calcArea(5));

    // -------------------arrow function-------------------
    console.log('-------------------arrow function-------------------');
    const calcArea2 = (radius) => {
        return area = 3.14 * radius ** 2;
    };
    console.log('Arrow1, area is:', calcArea2(5));

    // or we can go with the following if there is only 1 parama & 1 line of code
    const calcArea3 = radius => area = 3.14 * radius ** 2;
    console.log('Arrow2, area is:', calcArea3(5));

    // -------------------arrow function exercise-------------------
    console.log('-------------------arrow function exercise-------------------');
    const bill = function (products, tax) {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i] + products[i] * tax;
        }
        return total;
    };
    console.log(bill([10, 15, 30], 0.2));

    // ----------------- and the short form becomes this
    const sbill = (products, tax) => {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i] + products[i] * tax;
        }
        return total;
    };
    console.log(sbill([10, 15, 30], 0.2));

    // -------------------functions vs methods-------------------
    console.log('-------------------functions vs methods-------------------');
    
}

