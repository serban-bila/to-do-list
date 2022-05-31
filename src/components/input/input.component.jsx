import './input.styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../features/list/listSlice';

const Input = () => {   
    const [ input, setInput ] = useState('');
    const [ inputVal, setInputVal ] = useState();
    
    const dispatch = useDispatch();

    return (
        <div className="input-container">
                <input type="text" placeholder="type to-do activity" onChange={(e) => setInput(e.target.value)} value=      {inputVal}/>   
                <button onClick={() => {
                    dispatch(addActivity(input));
                    setInputVal()
                }} type='submit'>Add activity</button>
        </div>
    );
};

export default Input;