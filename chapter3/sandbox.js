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

const namesD = ['Ali', 'Rali', 'Shaun'];
{
    // for loop
    console.log('-------------------for loop-------------------');

    for (let i = 0; i < 5; i++) {
        console.log('in loop:', i);
    }


    for (let i = 0; i < namesD.length; i++) {
        console.log(namesD[i]);
    }

    for (let i = 0; i < namesD.length; i++) {
        let html = `<div>${namesD[i]}</div>`;
        console.log(html);
    }
}

{
    // while loop
    console.log('-------------------while loop-------------------');
    let i = 0;
    while (i < namesD.length) {
        console.log(namesD[i]);
        i++;
    }
}

{
    //Do while loop
    console.log('-------------------Do while loop-------------------');
    let i = 6;
    do {
        console.log('This is a proof that this loop runs at least once')
        console.log(i);
        i++;
    } while (i < 5);
}

{
    // if statements
    console.log('-------------------if statements-------------------');

    const age = 20;
    if (age >= 20) {
        console.log('you are 20 years old');
    }

    const ninjas = ['Ali', 'Bella', 'Mario', 'Rali', 'Luigi'];
    if (ninjas.length > 3) {
        console.log('You have exceeded the limit of Ninjas');
    }

    const password = 'password1234';
    if (password.length >= 12) {
        console.log('Password is mighty strong.');
    } else if (password.length >= 8) {
        console.log('Password is long enough.');
    } else {
        console.log('your password is not long enough.');
    }


}

{
    // logical operator - OR || and AND &&
    console.log('-------------------logical operator-------------------');

    const password = 'password1234';
    if (password.length >= 12 && password.includes('@' || '!' || '$' || '%' || '&')) {
        console.log('Password is mighty strong.');
    } else if (password.length >= 8 && password.includes('@' || '!' || '$' || '%' || '&')) {
        console.log('Password is long enough and strong.');
    } else if (password.length >= 8 && !password.includes('@' || '!' || '$' || '%' || '&')) {
        console.log('Password is just long enough but not strong.');
    } else {
        console.log('your password is not long enough.');
    }
}

{
    // break and continue
    console.log('-------------------break and continue-------------------');

    const score = [50, 25, 0, 30, 100, 20, 10];
    for (let i = 0; i < score.length; i++) {
        if (score[i] === 0) {
            continue;
        }
        console.log('your score: ', score[i]);
        if (score[i] === 100) {
            console.log('Congrats, you got the top score!');
            break;
        }
    }

}

{
    // switch statement
    console.log('-------------------Switch statement-------------------');
    const grade = 'D';
    switch (grade) {
        case 'A':
            console.log('You\'ve got an A!');
            break;
        case 'B':
            console.log('You\'ve got a B!');
            break;
        case 'C':
            console.log('You\'ve got a C!');
            break;
        case 'D':
            console.log('You\'ve got a D!');
            break;
        case 'E':
            console.log('You\'ve got a E!');
            break;
        default:
            console.log('Not a valid grade.');
            break;
    }
}

{
    // variables & block scope
    console.log('-------------------variables & block scope-------------------');
    let age = 30;

    if(true){
        console.log()
    }
}