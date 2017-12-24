const endpoints = {
    todosUrl: 'http://localhost:8080/todos/'
};

const postHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};


/*
* get all todos
*/
export const getTodos = () => {
  const { todosUrl } = endpoints;
  return fetch(todosUrl)
    .then( resp => resp.json());
}

/*
* create new todo
*/
export const createTodo = (todoName) => {
  console.log('creating todo => ', todoName);
  const { todosUrl } = endpoints;
  return fetch(
    todosUrl,
    {
      method: 'POST',
      headers: postHeaders,
      // create new todo with
      // initial defaults
      body: JSON.stringify({
        name: todoName,
        isComplete: false
      })
    }
  )
  .then( resp => resp.json());
}

/*
* update existing todo
*/
export const updateTodo = (todo) => {
  console.log('updating todo => ', todo);
  const { todosUrl } = endpoints;
  return fetch(
    `${todosUrl}${todo.id}`,
    {
      method: 'PUT',
      headers: postHeaders,
      // update existing todo with
      // new data
      body: JSON.stringify(todo)
    }
  )
  .then( resp => resp.json());
}

/*
* delete todo
*/
export const deleteTodo = (id) => {
  const { todosUrl } = endpoints;
  return fetch(
    `${todosUrl}${id}`,
    {
      method: 'DELETE',
      headers: postHeaders
    }
  );
}
