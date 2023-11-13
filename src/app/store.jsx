import { configureStore } from "@reduxjs/toolkit";
import  taskReducers from "../features/tasks/taskSlice";

// Aqui nos devuelve un lugar donde se aloja nuestors elementos store en un objeto

const store = configureStore ({
    reducer: {
        tasks: taskReducers,
    },
});

// Aqui este store funcionara como un conservador de estados o informacion

export default store