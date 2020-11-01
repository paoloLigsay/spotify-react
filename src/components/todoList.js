import React, { useState } from 'react'

const Todo = () => {
  const [state, setState] = useState(
    {
      todo: '',
      todoList: []
    }
  )

  /* Create */

  let { todo, todoList } = state

  /* Handle */

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })
  }

  const createTodo = () => {
    const list = todoList
    list.push(todo)

    setState({ ...state, todoList: list })

    todo = ''
  }

  return (
    <div className="todo">
      <h1> My Todo </h1>
      <div className="todo-flex">
        <input
          type="text"
          className="todo__input"
          id="todo"
          placeholder="write your task"
          name="todo"
          value={todo}
          onChange={handleOnChange}
        />
        <button className="btn" onClick={createTodo}> add Todo </button>
      </div>

      <ul>
        {
          todoList.length ?
            todoList.map((v, i) => {
              return (
                <li>
                  <p> {todoList} </p>
                  <button className="btn btn--smaller btn--blue"> Edit </button>
                  <button className="btn btn--smaller btn--red"> Delete </button>
                </li>
              )
            }) : <span> No Data Found </span>
        }
      </ul>
    </div>
  )
}

export default Todo