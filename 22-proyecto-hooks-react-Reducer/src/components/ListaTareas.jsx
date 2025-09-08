const initialState = [{
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducers',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
    if (action.type === '[TAREAS] Agregar Tarea'){
        return [...state, action.payload];
    }
    return state;
}

console.log(tareaReducer(initialState, agregarTarea));

export const ListaTareas = () => {
    return (
        <div>ListaTareas</div>
    )
}
