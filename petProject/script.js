const content = document.querySelector('.row');
fetch('./tbl_Periodic.json')
    .then((response) => {
        console.log(response, 'resolved');
        return response.json();
    }).then(data => {
        html = ``;
        console.log(data);
        data.forEach((element, index) => {
            html += `
            <!-- Modal Trigger -->
            <a class="waves-effect waves-light btn modal-trigger" href="#modal${index + 2}">${element.symbol} </a>
            <!-- Modal Structure -->
            <div id="modal${index + 2}" class="modal bottom-sheet">
                <div class="modal-content">
                    <h2>${element.symbol}</h2>
                    <h4>${element.name}</h4>
                    <p>Energy Levels: ${element.EnergyLevels}</p>
                    <a href="${element.source} target="popup"><i class="material-icons">info</i></a>
                    
                    <p>Energy Levels: ${element.source}</p>
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
        console.log(error, ' broke the promise');
    });
            //<a class="waves-effect waves-light btn modal-trigger" href="#modal${index + 2}" style="background-color:#${element.cpkHex};" >${element.symbol} </a>

document.addEventListener('DOMContentLoaded', initializeModal);
function initializeModal() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
}

// document.addEventListener('DOMContentLoaded', () => {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
// });

