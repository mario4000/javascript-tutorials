const endpoints = {
    get_todos: 'http://localhost:8080/todos'
};

export const getTodos = () => {
  const { get_todos} = endpoints;
  return fetch(get_todos)
    .then( resp => resp.json());
}
