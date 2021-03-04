import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../Action/index';

function AddTodo(props) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            let Input = e.target.userinput.value;
            e.target.userinput.value = ""
            //console.log(input)
            props.dispatch(addTodo(Input))
        }}>
            <input type='text' name='userinput'/>
            
            <button>Submit</button>     
        </form>
    )
}

export default connect()(AddTodo)
