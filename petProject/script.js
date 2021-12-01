// //get refrence to the 'ul'
// const div = document.querySelector('.row');

// let html = ``;
// //const span = ['Mario', 'Luigi'];
// const span = ['Mario', 'Luigi', 'Ali', 'Rali', 'Bella'];
// span.forEach(function (person) {
//     // create html template
//     //html += `${person}`;
//     html += `
//     <div class="col s12 l6">
//     <div class="card">
//         <div class="card-image">
//             <img src="./img/curry.jpg" alt="" srcset="">
//             <a href="" class="halfway-fab btn-floating pink pulse">
//                 <i class="material-icons">favorite</i>
//             </a>
//         </div>
//         <div class="card-content">
//             <span class="card-title">${person}</span>
//             <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                 cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
//         </div>
//         <div class="card-action">
//             <a href="">More details</a>
//             <a href="">View Ingredients</a>
//         </div>
//     </div>
// </div>
//     `;
// });
// console.log(html);
// div.innerHTML = html;


// const content = document.querySelector('.row');
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             // if the status is not 200
//             callback('could not fetch data', undefined);
//         }
//     });
//     request.open('GET', resource);
//     request.send();
// };
// getTodos('./perTab.json', (error, data) => {
//     html = ``;
//     console.log(data);
//     data.forEach((element, index) => {
//         html += `
//         <!-- Modal Trigger -->
//         <a class="waves-effect waves-light btn modal-trigger" href="#modal${index + 2}">${element.Name}</a>

//         <!-- Modal Structure -->
//         <div id="modal${index + 2}" class="modal bottom-sheet">
//             <div class="modal-content">
//                 <h4>h4</h4>
//                 <p>A bunch of text</p>
//             </div>
//             <div class="modal-footer">
//                 <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//             </div>
//         </div>
//         `;
//     });
//     content.innerHTML = html;
// });

const content = document.querySelector('.row');
fetch('./perTab.json')
    .then((response) => {
        console.log(response, 'resolved');
        return response.json();
    }).then(data => {
        html = ``;
        console.log(data);
        data.forEach((element, index) => {
            html += `
            <!-- Modal Trigger -->
            <a class="waves-effect waves-light btn modal-trigger" href="#modal${index + 2}">${element.Name}</a>
    
            <!-- Modal Structure -->
            <div id="modal${index + 2}" class="modal bottom-sheet">
                <div class="modal-content">
                    <h4>${element.Name}</h4>
                    <p>Energy Levels: ${element.EnergyLevels}</p>
                </div>
                <!--<div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>-->
            </div>
            `;
        });
        content.innerHTML = html;
        initializeModal();
    }).catch((error) => {
        console.log(error, ' broke the promise')
    })

document.addEventListener('DOMContentLoaded', initializeModal);
function initializeModal() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
}

// document.addEventListener('DOMContentLoaded', () => {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
// });

