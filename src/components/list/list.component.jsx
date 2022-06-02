import './list.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {check, unCheck} from '../../features/list/listSlice';
import { open } from '../../features/modal/modalSlice';
import { useState } from 'react';

const List = () => {
    const { toDoList } = useSelector((state) => state.list);
    const [ showCompleted, setShowCompleted ] = useState(false);
    const [ showIncomplete, setShowIncomplete ] = useState(true);

    const dispatch = useDispatch();  


    return( 
        <div>
            <div className='button-container'>
            <button className='btn clear-button' onClick={() => {dispatch(open()); }}>CLEAR</button>
            <button className='btn all-button' onClick={() => {setShowCompleted(true); setShowIncomplete(true)}}>ALL</button>
            <button className='btn completed-button' onClick={() => { setShowCompleted(true); setShowIncomplete(false)}}>COMPLETED</button>
            <button className='btn incompleted-button' onClick={() => {setShowCompleted(false); setShowIncomplete(true)}}>INCOMPLETED</button>
            <hr />
        </div>
        <div className='list-container'>
            {showIncomplete &&
                toDoList.map((el) => {
                    if(el.isChecked === false)
                    return (<span onClick={() => {
                        if(el.isChecked === false){
                            dispatch(check(el.title))
                            return;
                        } else
                        dispatch(unCheck(el.title));
                    }} className={ el.isChecked === true? "list-element clicked" : "list-element unclicked" } >{el.title}</span>)
                })
            }
            {showCompleted &&
                toDoList.map((el) => {
                    if(el.isChecked === true)
                    return (<span onClick={() => {
                        if(el.isChecked === false){
                            dispatch(check(el.title))
                            return;
                        } else
                        dispatch(unCheck(el.title));
                    }} className={ el.isChecked === true? "list-element clicked" : "list-element unclicked" } >{el.title}</span>)
                })
            }
          </div>
        </div>
    );
};

export default List;