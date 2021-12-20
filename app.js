window.addEventListener('load', () => {
    const ul = document.querySelector('#list');
    const form = document.querySelector('form');
    const item = document.querySelector('#item');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (item.value !== '') ul.innerHTML += `<li>${item.value}<i class="fas fa-trash"></i></li>`;

        storage();

        item.value = '';
    })

    ul.addEventListener('click', (e) => {
        let element = e.target.classList;
        element.contains('checked') ? element.remove('checked') : element.add('checked');
        console.log(e.target.parentNode);
        if (element.contains('fas') && element.contains('checked')) e.target.parentNode.remove();
        storage();
    })

    function storage() {
        window.localStorage.todoList = ul.innerHTML;
    }

    function getValue() {
        let storageContent = window.localStorage.todoList;

        storageContent ? ul.innerHTML = storageContent : ul.innerHTML = "";
    }

    getValue();
})