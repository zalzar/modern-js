console.log('-------------------Chapter 12 - Async JavaScript-------------------');
// // 87. Async Code in Action
// {
//     // the following example makes it easy to understand how Async works 
//     console.log(1);
//     console.log(2);
//     setTimeout(() => {
//         console.log('callback function fired');
//     }, 2000);
//     console.log(3);
//     console.log(4);
// }

// // 88. What are HTTP Requests?
// {
//     // https://jsonplaceholder.typicode.com/
//     // https://jsonplaceholder.typicode.com/todos/1
// }

// // 89. Making HTTP Requests (XHR)
// {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         // console.log(request, request.readyState);
//         if(request.readyState===4){
//             console.log(request.responseText);
//         }
//     });

//     request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// }

// // 90. Response Status
// {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         // console.log(request, request.readyState);
//         if(request.readyState===4 && request.status===200){
//             console.log(request, request.responseText);
//         }else if(request.readyState===4){
//             // if the status is not 200
//             console.log('could not fetch the data');
//         }
//     });
//     request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// }

// // 91. Callback Functions
// {
//     const getTodos = (callback) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined,data);
//             } else if (request.readyState === 4) {
//                 // if the status is not 200
//                 callback('could not fetch data',undefined);
//             }
//         });
//         request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.send();
//     };
//     console.log(1);
//     console.log(2);

//     getTodos((error,data)=>{
//         console.log('callback is fired');
//         if(error){
//             console.log(error);
//         }else{
//             console.log(data);
//         }
//     });
//     console.log(3);
//     console.log(4);
// }

// // 92. JSON Data
// {
//     const getTodos = (callback) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined,data);
//             } else if (request.readyState === 4) {
//                 // if the status is not 200
//                 callback('could not fetch data',undefined);
//             }
//         });
//         request.open('GET', 'perTab.json');
//         request.send();
//     };
//     console.log(1);
//     console.log(2);

//     getTodos((error,data)=>{
//         console.log('callback is fired');
//         if(error){
//             console.log(error);
//         }else{
//             console.log(data);
//         }
//     });
//     console.log(3);
//     console.log(4);
// }

// // 93. Callback Hell (requsting from multiple JSON files)
// {
//     const getTodos = (resource, callback) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined, data);
//             } else if (request.readyState === 4) {
//                 // if the status is not 200
//                 callback('could not fetch data', undefined);
//             }
//         });
//         request.open('GET', resource);
//         request.send();
//     };
//     console.log(1);
//     console.log(2);

//     getTodos('./perTab.json', (error, data) => {
//         console.log(data);
//         getTodos('./perTab2.json', (error, data) => {
//             console.log(data);
//             getTodos('./perTab3.json', (error, data) => {
//                 console.log(data);
//             });
//         });
//     });
//     console.log(3);
//     console.log(4);
// }

// 94. Promise Basics
{
    const getTodos = (resource, callback) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } else if (request.readyState === 4) {
                    // if the status is not 200
                    reject('We lost a file: ');
                }
            });
            request.open('GET', resource);
            request.send();
        })

    };
    jsonFiles=['./perTab.json','./perTab2.json','./perTab3.json'];
    getTodos(jsonFiles[0]).then((data) => {
        console.log('Promise 1 resolved', data);
    }).catch(error => {
        console.log(error,jsonFiles[0]+' broke the promise.',);
    });



    //promise example
    const getSomething = () => {
        return new Promise((resolve, reject) => {
            //resolve('Some data');
            reject('Some data');
        });
    };
    // getSomething().then(data=>{ 
    //     console.log(data);
    // }),(error)=>{
    //     console.log(error);
    // };

    // getSomething().then(data => {
    //     console.log(data);
    // }).catch(error => {
    //     console.log(error);
    // });


}