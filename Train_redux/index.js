const {combineReducers} = Redux;

const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action .text,
                    completed: false
                }
        ]
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
    }

default:
    return state;
}
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action .text,
                    completed: false
                }
        ]
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
        default:
            return state;
    }
}

const setVisibility = (state=[], action ) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state;
    }
}

const todoReducers = combineReducers({
    setVisibility,
    todos
});



addTodo = () => {
    const action = {
        type: 'ADD_TODO',
        text: 'learn Redux',
        id: 0
    }
}


const {createStore} = Redux;
const store = createStore(todoReducers);
const { Component } = React;

let nextTodoId = 2;
class TodoApp extends Component {
    render() {
        return(
            <div>
            <input ref={node=> {
            this.input = node;
    }} />
        <button
        onClick={() => {
            store.dispatch({
                type: 'ADD_TODO'  ,
                text: this.input.value,
                id: nextTodoId++
            })
        }}>
        Add Todo
        </button>
        <ul>
        {this.props.todos.map(todo =>
        <li key={todo.id}>
        {todo.text}
    </li>)}
        </ul>
        </div>
    )
    }
    }
    const render = () => {
    ReactDOM.render(
<TodoApp
    todos = {store.getState().todos}/>,
document.getElementById('root'));
}
store.subscribe(render);
render();

console.log('Initail state');
console.log(store.getState());
console.log('---------------');

console.log('Dispatch ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn redux'
});
console.log(store.getState());
console.log('---------------');

console.log('Dispatch ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'gO HOME'
});
console.log(store.getState());
console.log('---------------');


console.log('Dispatch TOGGLE_TODO');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log(store.getState());
console.log('---------------');


console.log('END');