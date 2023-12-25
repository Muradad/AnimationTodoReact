import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { nanoid } from "nanoid"
function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [animationParent] = useAutoAnimate()

    const handleSubmit = e => {
        e.preventDefault()
        setTodos(todos => [{
            id: nanoid(),
            title: todo
        }, ...todos])
        setTodo('')
    }

    const deleteTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    const deleteAllTodo = () => {
        setTodos([])
    }

    //aute animated

    return (
        <section className='bg-gray-700 h-screen'>
            <div className=' max-w-xl mx-auto py-6'>
                <form className='flex gap-x-2' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Todo yaz' className=' outline-none border-none bg-gray-800 text-white flex-1 border rounded p-4 text-sm' value={todo} onChange={e => setTodo(e.target.value)} />
                    <button className=' rounded p-4 bg-gray-950 text-white' disabled={!todo} type='submit'>Todo</button>
                </form>
                <ul className='flex flex-col gap-y-4 mt-5' ref={animationParent}>
                    {todos.map((todo) => (
                        <li key={todo.id} className='p-4 bg-gray-800 text-white rounded text-sm flex justify-between items-center'>
                            {todo.title}
                            <button onClick={() => deleteTodo(todo.id)} className='bg-red-800 p-2 rounded text-white'>SIL</button>
                        </li>

                    ))}

                    {!todos.length && (
                        <li className='text-center w-28  bg-black text-white'>
                            Todo Yoxdur!
                        </li>
                    )}
                </ul>
                {todos.length > 0 && (
                    <button onClick={deleteAllTodo} className='p-2 mt-2 w-full bg-red-900 text-white'>
                        Butun Todolari sil
                    </button>
                )}
            </div>
        </section>
    )
}

export default Todo
