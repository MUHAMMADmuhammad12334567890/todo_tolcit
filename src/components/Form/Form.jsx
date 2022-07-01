import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../reduser/todo.Reduser';
const Form = () => {
    const [text, setText] = useState('')
    const disPatch = useDispatch()
    const todos = useSelector(state => state.todo)

   const  hendleValue = (e) => {
        setText(e.target.value)
        
    }
const hendleAdd = (e) => {
e.preventDefault()
disPatch(add(text))
setText('')


}

console.log(todos)

    return (
        <div>
            <form action="">
                <input className='input' type="text" value={text} onChange={(e) => hendleValue(e)} />
                <input className='input_button' type="submit" onClick={(e) => hendleAdd(e)} disabled={!text}/>
            </form>
        </div>
    );
};

export default Form;