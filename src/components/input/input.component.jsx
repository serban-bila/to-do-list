import './input.styles.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity } from '../../features/list/listSlice';
import { signInWithGooglePopup, createUserData } from '../../utils/firebase/firebase.utils';
import { signOutUser } from '../../utils/firebase/firebase.utils';


const Input = () => {   
    const [ input, setInput ] = useState('');
    const [ inputVal, setInputVal ] = useState();
    
    const dispatch = useDispatch();
    const { currentUser, displayName } = useSelector((state) => state.user);

    return (
        <div className="input-container">
            {currentUser ? (
                <span className='sign' onClick={() => {signOutUser()}}>SIGN OUT</span>
            ) : (
                <span className='sign' onClick={() => {signInWithGooglePopup()}}>SIGN IN</span>
            )}
            {currentUser && (
                <span className='username'>logged in as:  {displayName}</span>
            )}
            <h1 className='title'>One At A Time</h1>
            <input className='input' type="text" placeholder="type to-do activity" onChange={(e) => setInput(e.target.value)} value=      {inputVal}/>   
            <button className='add-button' onClick={() => {
                dispatch(addActivity(input));
                setInputVal();
                createUserData();
            }} type='submit'>Add activity</button>
        </div>
    );
};

export default Input;