import reducer from './todo'

describe('Todo Reducer', () => {

  test("returns a state object", () => {
    const result = reducer(undefined, {type: "ANYTHING"})
    expect(result).toBeDefined()
  })

  test("add todo", () => {

    const startState = {
      todos: [
        {id: 1, name: "Create Static UI", isComplete: true},
        {id: 2, name: "Create Initial State", isComplete: true},
        {id: 3, name: "Use State to Render UI", isComplete: true}
      ]
    }

    const endState = {
      todos: [
        {id: 1, name: "Create Static UI", isComplete: true},
        {id: 2, name: "Create Initial State", isComplete: true},
        {id: 3, name: "Use State to Render UI", isComplete: true},
        {id: 4, name: "Apply Unit Tests", isComplete: true}
      ]
    }

    const action = {
      type: "TODO_ADD",
      payload: {
        id: 4,
        name: "Apply Unit Tests",
        isComplete: true
      }
    }
    
    const result = reducer(startState, action)
    expect(result).toEqual(endState)
  })

});
