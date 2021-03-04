import React from 'react'
import { connect } from 'react-redux'
import {deleteTodo} from '../../Action/index';

function List(props) {
    return <ul>
            {props.todos.map((todo,index)=>{
                <li key={index}>{todo.message}
                    <button onClick={()=>props.dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
                })}
            </ul>
    
};

//for state access
const mapStateToProps = (state)=>({
    todos:state.todos.data
})

export default connect(mapStateToProps)(List);
//https://www.youtube.com/watch?v=TfdIULF5HAk