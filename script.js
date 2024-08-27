document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const li = document.createElement('li');

        const textNode = document.createTextNode(todoText);
        li.appendChild(textNode);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.appendChild(document.createTextNode('Remove'));

        removeBtn.addEventListener('click', function() {
            li.parentNode.removeChild(li);
        });

        li.appendChild(removeBtn);

        document.getElementById('todo-list').appendChild(li);

        todoInput.value = '';
    }
});
