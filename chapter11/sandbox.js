console.log('-------------------Chapter 11 - Dates & Times-------------------');
{
    const now = new Date();
    console.log(now);
    console.log(typeof now);

    //year, month, day, times
    console.log('get full Year:', now.getFullYear())
    console.log('get Month:', now.getMonth());
    console.log('get Date:', now.getDate());
    console.log('get Day:', now.getDay());//day of the year
    console.log('get Hours:', now.getHours());
    console.log('get Minutes:', now.getMinutes());
    console.log('get Seconds:', now.getSeconds());

    //timestamp
    console.log('Timestamp', now.getTime());

    //date strings
    console.log(now.toDateString());
    console.log(now.toTimeString());
    console.log(now.toLocaleString());
}