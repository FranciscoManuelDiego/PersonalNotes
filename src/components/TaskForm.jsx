import { useState , useEffect } from 'react'
import { addTask , editTask } from '../features/tasks/taskSlice'
import { useDispatch , useSelector} from 'react-redux'
// Aqui traigo mi funcion junto con mi empleador de tareas
import { v4 as uuid } from 'uuid'
// Aca importo un identificador universal para poder importar y exportar tareas
import { useNavigate, useParams, Link } from 'react-router-dom'
import { CloseButton } from "@chakra-ui/close-button"


const TaskForm = () => {

const [task, setTask]= useState ({
    title: '',
    description: '',
});

const dispatch = useDispatch();
const navigate = useNavigate();
const params = useParams();
const tasks = useSelector(state => state.tasks)

const HandleChange = (e) => {
    setTask({
        ...task,
        [e.target.name] : e.target.value,
    });
};
// Esto se va a usar para manejar la informacion del formulario

const HandleSubmit = (e) => {
    e.preventDefault()
    if(params.id) {
        dispatch(editTask({
            id: params.id,
            title: task.title,
            description: task.description,
            // Aqui agrego los parametros necesarios para que mi dispatch surja efecto y pueda enviar los datos a mi reducer y usarlos en localStorage
        }));
    }else {
        dispatch(addTask({
            ...task,
            id: uuid(),
        }));
        // Esto es para evitar que se refresque la pagina cada vez que se envia datos al formulario
        //  Para poder guardar esto en un estado , voy hacia mis reducers y establezco mis funciones
        // Ya con esta funcion puedo crear tareas!
    }
    navigate('/')
};

useEffect(()=>{
    if(params.id) {
            // setTask(tasks.find(task => task.id === params.id))
            const foundTask = tasks.find(task => task.id === params.id);
            if (foundTask) {
                setTask(foundTask);
            }
        // Esto lo que va a hacer es econctrar y devolverme ese id dentro de mis taks
    }
}, [params.id, tasks]);


return (
    <form onSubmit={HandleSubmit} className='bg-zinc-700 max-w-md p-4 text-xl relative'>
        <Link to="/">
            <CloseButton className="absolute top-4 right-4" size="sm" />
        </Link>
        <label htmlFor="title" className='block text-md font-bold mb-1'>Task: </label>
        <input 
        name= 'title' 
        type="text" 
        placeholder='Title' 
        onChange={HandleChange}
        value= {task.title}
        className='w-full p-2.5 rounded-md bg-zinc-500 mb-1.5'
        required
        />
        <label htmlFor="description" className='block text-md font-bold mb-1'>Description: </label>
        <textarea 
        name="description" 
        placeholder='Description' 
        onChange={HandleChange}
        value={task.description}
        className='w-full p-2.5 rounded-md bg-zinc-500 mb-1.5'
        required
        />
        <button className='bg-indigo-700 p-1.5 rounded-md text-lg'>Save</button>
    </form>
    )
};

export default TaskForm