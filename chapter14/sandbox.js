console.log('-------------------Section 14: Local Storage-------------------');
// // 111. Storing & Getting Data
// {
//     // store data in local storage
//     localStorage.setItem('Name', 'Ali');
//     localStorage.setItem('age', '32');

//     // get data from local storage and
//     let Name = localStorage.getItem('Name');
//     let age = localStorage.getItem('age');

//     console.log(Name, age);

//     // updating data
//     localStorage.setItem('Name', 'Ali Zal');

//     // updating data using dot notation
//     localStorage.age = '31';

//     Name = localStorage.getItem('Name');
//     age = localStorage.getItem('age');

//     console.log(Name, age);
// }

// 112. Deleting Storage Data
{
    // store data in local storage
    localStorage.setItem('Name', 'Ali');
    localStorage.setItem('age', '32');

    // get data from local storage and
    let Name = localStorage.getItem('Name');
    let age = localStorage.getItem('age');

    console.log(Name, age);

    // updating data
    localStorage.setItem('Name', 'Ali Zal');

    // updating data using dot notation
    localStorage.age = '31';

    Name = localStorage.getItem('Name');
    age = localStorage.getItem('age');

    console.log(Name, age);

    // deleting data from localStorage
    localStorage.removeItem('');

    // the following removes all the items from localstorage
    localStorage.clear();
}
