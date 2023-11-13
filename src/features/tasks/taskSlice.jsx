// Aqui se van a definir mis tareas a utilizar

// Se pueden actualizar, tanto commo quitar como agregar datos a un arreglo 

import { createSlice } from "@reduxjs/toolkit";
// import store from "../../app/store";


// const exampleState = [
//     {
//         id: null,
//         title: "Las Tareas van a ser mostradas aqui! :) ",
//         description: null,
//         taskCompleted: false,
//     },
// ];
// Aqui estoy enviando nun array de objetos en conjunto con tareas

// Deberia poner mi localstorage como una constante aqui y luego invocarlo en mis funciones


const taskSlice = createSlice({
    name: "tasks",
    // Este slice me requiere un nombre desde donde inciaar
    initialState: JSON.parse(localStorage.getItem('tasks')) || [] ,
    // Este cuando inicia va a ser un array vacio
    reducers:  {
        addTask: (state, action) =>  {
            // console.log(state , action)
            state.push(action.payload)
            // Aqui lo se hace es enviar otro oobjeto a mi arreglo
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload

            const updatedTasks = state.map((task) =>
            task.id === id ? { ...task, title, description } : task
        );
        
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        
        return updatedTasks;
            // Esto crea un arrray nuevo con propiedades nuevas.
            // const foundTask = state.find((task) => task.id === id)
            // // Aqui busca en el estado el task por id
            // if(foundTask){
            //     foundTask.title = title;
            //     foundTask.description = description;
            //     localStorage.setItem('tasks' , JSON.stringify(state));
            // }
        },
        deleteTask: (state, action) => {
            // const TaskFound = state.find( task => task.id === action.payload)
            // if (TaskFound) {
            //     state.splice(state.indexOf(TaskFound), 1)
            //     localStorage.removeItem('tasks');
            // }
            const taskId = action.payload;
            const updatedTasks = state.filter((task) => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
            // Este splice se encarga primero de encontrar el el index de la tarea y de luego eliminarla utilizando como parametro el 1.
        },
    },
});
    // Aqui van a entrar nuestras funciones y acciones
    // Cuando agregue funciones estas van a ser declaradas como propiedad de objeto
    // Estas van a poder modificar el estado inicial
    // Este addTask va a poder ser llamado desde cualquier archgivo en nuestra app.

// Esto hace que pueda acceder a la funcion tasks en todo mi App
export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer