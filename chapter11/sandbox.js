console.log('-------------------Chapter 11 - Dates & Times-------------------');
// // 82. Dates & Times in JavaScript
// {
//     const now = new Date();
//     console.log(now);
//     console.log(typeof now);

//     //year, month, day, times
//     console.log('get full Year:', now.getFullYear())
//     console.log('get Month:', now.getMonth());
//     console.log('get Date:', now.getDate());
//     console.log('get Day:', now.getDay());//day of the year
//     console.log('get Hours:', now.getHours());
//     console.log('get Minutes:', now.getMinutes());
//     console.log('get Seconds:', now.getSeconds());

//     //timestamp
//     console.log('Timestamp', now.getTime());

//     //date strings
//     console.log(now.toDateString());
//     console.log(now.toTimeString());
//     console.log(now.toLocaleString());
// }

// // 83. Timestamps & Comparisons
// {
//     const before = new Date('February 1 2019 7:30:59');
//     const now = new Date();

//     //console.log(now.getTime(), before.getTime());

//     const diff = now.getTime() - before.getTime();
//     console.log(now.getTime() + diff);

//     const mins = Math.round(diff / 1000 / 60);
//     const hours = Math.round(mins / 60);
//     const days = Math.round(hours / 24);
//     console.log(mins, hours, days);
//     console.log(`The blog was written ${days} days ago.`);

//     // converting timestamps into date objects
//     const timestamp = 1675938474990;
//     console.log(new Date(timestamp));
// }

// // 84. Building a Digital Clock
// {
//     const clock = document.querySelector('.clock');

//     const tick = () => {
//         const now = new Date();
//         const h = now.getHours();
//         const m = now.getMinutes();
//         const s = now.getSeconds();
//         html = `
//             <span>${h}</span> :           
//             <span>${m}</span> :            
//             <span>${s}</span>            
//         `;
//         clock.innerHTML = html;

//     };
//     setInterval(tick, 1000);
// }

// 85. Date-fns Library
{
    // https://date-fns.org/
    // format 
    const now = new Date();
    //console.log(dateFns.isToday(now));

    // formating options
    // https://date-fns.org/v1.9.0/docs/format
    console.log(dateFns.format(now, 'YYYY'));
    console.log(dateFns.format(now, 'MMMM'));
    console.log(dateFns.format(now, 'Do'));
    console.log(dateFns.format(now, 'dddd'));

    // Monday, 22nd November 2021
    console.log(dateFns.format(now, 'dddd, Do MMMM YYYY'));

    //comparing dates
    const before = new Date('February 1 2019 12:00:00');
    console.log(dateFns.distanceInWords(now, before));
    console.log(dateFns.distanceInWords(now, before,{addSuffix:true}));

}