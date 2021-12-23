// // 148. Spread & Rest
// {
//     // rest parameter
//     const double = (...nums) => {
//         console.log(nums);
//         return nums.map(num => num * 2);
//     }

//     const result = double(1, 5, 3, 7, 8, 2, 9);
//     console.log(result);

//     // spread syntax (arrays)
//     const people = ['Ali', 'ryu', 'Crystal'];
//     const members = ['mario', 'chun li', ...people];
//     console.log(members);

//     // spread syntax (object)
//     const person = { name: 'Shaun', Age: 30, job: 'Net Ninja' };
//     const personClone = {...person, location: 'London' };

//     console.log(personClone);
// }

// // 149. Sets
// {
//     const namesArray = ['Ryu', 'Ali', 'Ryu', 'Shaun'];
//     console.log(namesArray);

//     //const namesSet = new Set(['Ryu', 'Ali', 'Ryu', 'Shaun']);
//     // const namesSet = new Set(namesArray);
//     // console.log(namesSet);

//     // const uniqueNames = [...namesSet];
//     const uniqueNames = [...new Set(namesArray)];
//     console.log(uniqueNames);

//     // example of Sets rejecting duplicates
//     const ages = new Set();
//     ages.add(20);
//     ages.add(25).add(30);
//     ages.add(25);

//     // and if we want to remove
//     ages.delete(25);
//     console.log(ages, ages.size);

//     // to check if a member exist in a set
//     console.log(ages.has(30), ages.has(25));

//     // to remove all values
//     ages.clear();
//     console.log(ages);

//     // Sets are iterable
//     const ninjas = new Set([
//         { name: 'shaun', age: 30 },
//         { name: 'crystal', age: 29 },
//         { name: 'chun-li', age: 32 }
//     ]);

//     ninjas.forEach(ninja => {
//         console.log(ninja.name, ninja.age);
//     });
// }

// 150. Symbols
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof(symbolOne));
console.log(symbolOne === symbolTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);