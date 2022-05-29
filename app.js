const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
// adding todos form 
addForm.addEventListener("submit", e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length !== 0){
        newTodo(todo);
        addForm.add.value = "";
    }
});
// removing todos
list.addEventListener('click', e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

// searching todos
search.addEventListener('keyup', () => {
    const text = search.value.trim().toLowerCase();
    filterTodos(text);
});

// adding todos function 
const newTodo = todo => {
    const html = 
    `       <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span >${todo}</span>
            <i class="far fa-trash-alt delete"></i>
            </li> `;
    list.innerHTML += html;
};

// searching function
const filterTodos = term => {
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}
