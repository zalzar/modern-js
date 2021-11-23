console.log('-------------------Chapter 12 - Async JavaScript-------------------');
// 87. Async Code in Action
{
    // the following example makes it easy to understand how Async works 
    console.log(1);
    console.log(2);
    setTimeout(() => {
        console.log('callback function fired');
    }, 2000);
    console.log(3);
    console.log(4);
}

