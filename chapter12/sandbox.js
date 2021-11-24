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

// 90. Response Status
{
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange',()=>{
        // console.log(request, request.readyState);
        if(request.readyState===4 && request.status===200){
            console.log(request, request.responseText);
        }else if(request.readyState===4){
            // if the status is not 200
            console.log('could not fetch the data');
        }
    });
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
}