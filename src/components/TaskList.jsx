import React from 'react'
import { useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const TaskList = () => {

    const tasks = useSelector( state => state.tasks)

    const dispatch = useDispatch();

    const HandleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    
    return (
    <div className='lg:w-4/5 md:3/5 fixed'>
        <header className='flex justify-between py-3 m-4'>
            <h1 className='text-xl font-medium underline underline-offset-4'>Total Tasks: {tasks.length}</h1>
                <Link 
                    className='bg-indigo-700 p-1.5 rounded-md text-md'
                    to='/create-task'>
                    Create tasks.
                </Link>
        </header>
        <div className='flex flex-wrap justify-center py-3 '>
            {tasks.map(task => (
                <div key={task.id} className='bg-neutral-600 p-5 rounded-md m-2 w-80 text-center break-words'>
                    <h2 className='font-medium underline underline-offset-4'>{task.title}</h2>
                    <p className=''>{task.description}</p>
                    <div className='flex justify-center mt-2'>
                        <Link to={`/edit-task/${task.id}`} className='bg-indigo-700 px-2 py-1 text-md rounded-md mx-0.5'>Edit</Link>
                        <button onClick={() =>HandleDelete(task.id)} className='bg-red-600 px-2 py-0.5 text-md rounded-md mx-0.5'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}


export default TaskList