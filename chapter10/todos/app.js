const addForm = document.querySelector('.add');
const tbxSearch = document.querySelector('.search input')
const list = document.querySelector('.todos');
const removeables = document.querySelectorAll('.filtered');
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.tbxAdd.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const addFilter = (searchWord) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(searchWord))
        .forEach((todo) => todo.classList.add('filtered'));
}
const removeFilter = (searchWord) => {
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(searchWord))
        .forEach((todo) => todo.classList.remove('filtered'));
}

const filterTodos = (searchWord) => {
    addFilter(searchWord);
    removeFilter(searchWord);
};


//search todo
tbxSearch.addEventListener('keyup', () => {
    const searchWord = tbxSearch.value.trim().toLowerCase();
        filterTodos(searchWord);

});
