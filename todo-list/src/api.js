const APIURL = 'https://web1-4ad19-default-rtdb.firebaseio.com/todolist.json';

export function getTodolist() {
    return fetch(APIURL)
        .then(response => response.json())
        .then(data => data);
}

export function updateTodoList(todolist) {
    return fetch(APIURL, {
        method: 'PUT',
        body: JSON.stringify(todolist),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}