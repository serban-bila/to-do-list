import './input.styles.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../features/list/listSlice';

const Input = () => {   
    const [ input, setInput ] = useState('');
    const [ inputVal, setInputVal ] = useState();
    
    const dispatch = useDispatch();

    return (
        <div className="input-container">
            <h1 className='title'>To-do List</h1>
            <input className='input' type="text" placeholder="type to-do activity" onChange={(e) => setInput(e.target.value)} value=      {inputVal}/>   
            <button className='add-button' onClick={() => {
                dispatch(addActivity(input));
                setInputVal()
            }} type='submit'>Add activity</button>
        </div>
    );
};

export default Input;