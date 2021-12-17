
// // 130. Getting Collections
// {
//     const list = document.querySelector('ul');
//     const addRecipe = (recipe) => {
//         let time=(recipe.created_at.toDate());
//         let html = `
//         <li>
//             <div>${recipe.title}</div>
//             <div>${time}</div>
//         </li>
//         `;
//         list.innerHTML += html;
//     }
//     db.collection('recipes').get().then((snapshot) => {
//         // when we have the data
//         // console.log(snapshot.docs[0].data());
//         snapshot.docs.forEach(doc => {

//             addRecipe(doc.data());
//         })
//     }).catch(err => {
//         console.error(err);
//     });
// }

// // 131. Saving Documents
// {
//     const list = document.querySelector('ul');
//     const form = document.querySelector('form');

//     const addRecipe = (recipe) => {
//         let time = (recipe.created_at.toDate());
//         let html = `
//         <li>
//             <div>${recipe.title}</div>
//             <div>${time}</div>
//             <button class="btn btn-danger btn-sm my-2"></button>
//         </li>
//         `;
//         list.innerHTML += html;
//     }
//     db.collection('recipes').get().then((snapshot) => {
//         // when we have the data
//         // console.log(snapshot.docs[0].data());
//         snapshot.docs.forEach(doc => {

//             addRecipe(doc.data());
//         })
//     }).catch(err => {
//         console.error(err);
//     });

//     // add document
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         const now = new Date();

//         const recipe = {
//             title: form.recipe.value,
//             created_at: firebase.firestore.Timestamp.fromDate(now),
//         };
//         db.collection('recipes').add(recipe).then(() => {
//             console.log('recipe is added');
//         }).catch(err => {
//             console.error(err);
//         });
//     });
// }

// // 132. Deleting Documents
// {
//     const list = document.querySelector('ul');
//     const form = document.querySelector('form');

//     const addRecipe = (recipe,id) => {
//         let time = recipe.created_at.toDate();
//         let html = `
//         <li data-id="${id}">
//             <div>${recipe.title}</div>
//             <div>${time}</div>
//             <button class="btn btn-danger btn-sm my-2">Delete</button>
//         </li>
//         `;
//         list.innerHTML += html;
//     }

//     // get documents
//     db.collection('recipes').get().then((snapshot) => {
//         // when we have the data
//         // console.log(snapshot.docs[0].data());
//         snapshot.docs.forEach(doc => {
//             addRecipe(doc.data(),doc.id);
//         })
//     }).catch(err => {
//         console.error(err);
//     });

//     // adding document
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         const now = new Date();

//         const recipe = {
//             title: form.recipe.value,
//             created_at: firebase.firestore.Timestamp.fromDate(now),
//         };
//         db.collection('recipes').add(recipe).then(() => {
//             console.log('recipe is added');
//         }).catch(err => {
//             console.error(err);
//         });
//     });

//     // Deleting document
//     list.addEventListener('click',e=>{
//         if(e.target.tagName==='BUTTON'){
//             const id = e.target.parentElement.getAttribute('data-id');
//             db.collection('recipes').doc(id).delete().then(()=>{
//                 console.log('recipes is deleted');
//             });
//         }
//     });
// }

// // 133. Real-time Listeners
// {
//     const list = document.querySelector('ul');
//     const form = document.querySelector('form');
//     const tbx = document.querySelector('#recipe');

//     const addRecipe = (recipe, id) => {
//         let time = recipe.created_at.toDate();
//         let html = `
//         <li data-id="${id}">
//             <div>${recipe.title}</div>
//             <div>${time}</div>
//             <button class="btn btn-danger btn-sm my-2">Delete</button>
//         </li>
//         `;
//         list.innerHTML += html;
//     }
//     const deleteRecipe = (id) => {
//         const recipes = document.querySelectorAll('li');
//         recipes.forEach(recipe => {
//             if (recipe.getAttribute('data-id') === id) {
//                 recipe.remove();
//             }
//         })
//     }

//     // get documents
//     db.collection('recipes').onSnapshot(snapshot => {
//         snapshot.docChanges().forEach(change => {
//             console.log(change);
//             const doc = change.doc;
//             if (change.type === 'added') {
//                 addRecipe(doc.data(), doc.id);

//             } else if (change.type === 'removed') {
//                 deleteRecipe(doc.id);
//             }
//         });
//     });

//     // adding document
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         const now = new Date();

//         const recipe = {
//             title: form.recipe.value,
//             created_at: firebase.firestore.Timestamp.fromDate(now),
//         };
//         db.collection('recipes').add(recipe).then(() => {
//             console.log('recipe is added');
//         }).catch(err => {
//             console.error(err);
//         });
//     });

//     // Deleting document
//     list.addEventListener('click', e => {
//         if (e.target.tagName === 'BUTTON') {
//             const id = e.target.parentElement.getAttribute('data-id');
//             db.collection('recipes').doc(id).delete().then(() => {
//                 console.log('recipes is deleted');
//             });
//         }
//     });
// }

// 134. Unsubscribing
{
    const list = document.querySelector('ul');
    const form = document.querySelector('form');
    const tbx = document.querySelector('#recipe');
    const button = document.querySelector('button');

    const addRecipe = (recipe, id) => {
        let time = recipe.created_at.toDate();
        let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">Delete</button>
        </li>
        `;
        list.innerHTML += html;
    }
    const deleteRecipe = (id) => {
        const recipes = document.querySelectorAll('li');
        recipes.forEach(recipe => {
            if (recipe.getAttribute('data-id') === id) {
                recipe.remove();
            }
        })
    }

    // get documents
    const unsub = db.collection('recipes').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            console.log(change);
            const doc = change.doc;
            if (change.type === 'added') {
                addRecipe(doc.data(), doc.id);

            } else if (change.type === 'removed') {
                deleteRecipe(doc.id);
            }
        });
    });

    // adding document
    form.addEventListener('submit', e => {
        e.preventDefault();
        const now = new Date();

        const recipe = {
            title: form.recipe.value,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        };
        db.collection('recipes').add(recipe).then(() => {
            console.log('recipe is added');
        }).catch(err => {
            console.error(err);
        });
    });

    // Deleting document
    list.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.parentElement.getAttribute('data-id');
            db.collection('recipes').doc(id).delete().then(() => {
                console.log('recipes is deleted');
            });
        }
    });

    // unsubscriber
    button.addEventListener ('click', () => {
        unsub();
        console.log('unsubscribed from collection changes');
    });
}