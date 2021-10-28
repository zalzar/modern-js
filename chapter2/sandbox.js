// //string
// console.log('hello world');

// let email = 'ali.z@gmail.com';
// console.log(email);

// //string concatingation
// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting charecters
// console.log(fullName[0]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, ' ', fullName);



// let index = email.indexOf('@');
// console.log(index);

// let email = 'ali.z@xoload.com';
// let result0 = email.lastIndexOf('o');
// let result1 = email.slice(2, 10);
// let result2 = email.substr(2, 10);
// let result3 = email.replace('z', 'g');
// let result4 = email.replace('o', 'a');
// console.log(result0);
// console.log(result1, '\n', result2, '\n', result3, '\n', result4);


// // ======================================================shorthand operators======================================================

// let radios = 10;
// const pi = 3.14;
// console.log(radios,pi);

//math operators +  -  *  /  **  %
//remember BIDMAS? no? read the next line
//BIDMAS = Brackets, Indices, Division/Multiplication, Addition/Subtraction

// let result=(pi*radios**2);
// console.log(result);



// let likes = 10;
// likes++;
// console.log(likes);
// likes--;
// console.log(likes);
// likes -= likes;
// console.log(likes);
// likes += likes + 10;
// console.log(likes);
// likes *= likes;
// console.log(likes);
// likes /= likes;
// console.log(likes);

// let likes=10;
// let result = 'the blog has '+likes+' likes';
// console.log(result);

// // ======================================================types of string output======================================================
// // // *****template string
// const title = 'best reads of 2021';
// const author = 'mario';
// const likes = 30;

// // // *****concatination way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// // // *****template string way
// let resultA = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log('\n');
// console.log(resultA);


// // // *****creating html template
// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

// // ======================================================arrays======================================================

// // bellow is one way to define an array in js
// let ninjas = ['Ali', 'Rali', 'Ryu'];
// console.log(ninjas); // prints ['Ali','Rali','Ryu']
// console.log(ninjas[2]); // prints Ryu

// // you can assign a value by
// ninjas[2] = 'Bella';
// console.log(ninjas[2]); // prints Bellas

// //lets create an age array
// let ages = [20, 25, 30, 35];
// console.log(ages[2]); // prints 30

// // you can even do this
// let random = ['Ali', 25, 'Crystal', 35];
// console.log(random); // prints ['Ali', 25, 'Crystal', 35]

// //you can get the lengh of an array with .length property
// console.log(random.length);

// // Array methods:
// let resultB = ninjas.join(',');
// console.log(resultB);

// // to search for an index of an array you can use .indexOf method
// let resultC = ninjas.indexOf('Ali');
// console.log(resultC);

// // You can also concatinate values to an array with .concat method
// let resultD = ninjas.concat('Soltan', 'Emilia');
// console.log(resultD);

// // to add a new value to an array, you can use the method .push
// let resultE = ninjas.push('Sergio');
// console.log(resultE);
// console.log(ninjas);

// // and you can remove a value from an array by .pop method
// resultE = ninjas.pop('Sergio');
// console.log(resultE);
// console.log(ninjas);

// // ======================================================null and undefined======================================================

// let ageA;
// console.log(ageA, ageA + 3, `the age is ${ageA}`);

// let ageB = null;
// console.log(ageB, ageB + 3, `the age is ${ageB}`);


// // ======================================================boolean======================================================

// // booleans and comparisons
// // remember these are not the same. one is boolean and the other one is 
// console.log(true, false, 'true', 'false');
// let namesA = ['Ali', 'Mario', 'Luigi']
// // methods can return booleans
// let email = 'bella@gmail.com';

// let resultF = email.includes('@');
// console.log(resultF); // this returns ture
// console.log(namesA.includes('Rali')); // this returns false
// // comparisons operators

// let ageC = 25;

// console.log(ageC == 25); // this returns ture
// console.log(ageC == 35); // this returns false
// // != is "not equal"
// console.log(ageC != 35); // this returns true
// console.log(ageC != 25); // this returns false
// // Other comparison operators are >, <, >=, <= 

// // JS is an case sensetive language so 'Ali' is not euqal to 'ali'
// let nameB = 'Ali', nameC = 'ali';
// console.log(nameB == 'ali'); // this returns false
// console.log(nameB == 'Ali'); // this returns true

// let ageD = 25;
// // loose comparison, compares only the value
// console.log(ageD == 25); // this returns true
// console.log(ageD == '25'); // this returns true

// // strict comparison compares the value as well as the type, so:
// console.log(ageD === 25); // this returns true
// console.log(ageD === '25'); // this returns false

// // type conversion
// let scoreA = '100';

// console.log(scoreA+1); // this returns 1001
// console.log(Number(scoreA)+1); // this returns 101

// let resultG = Number('hello');
// console.log(resultG); // this returns NaN (NaN : Not a Number)

// let resultH = String(50);
// console.log(resultH, typeof resultH); 


// // ======================================================Control Flow======================================================
// for loop
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}

const namesD = ['Ali', 'Rali', 'Shaun'];
for (let i = 0; i < namesD.length; i++) {
    console.log(namesD[i]);
}