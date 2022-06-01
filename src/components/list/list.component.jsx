import './list.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {check, unCheck} from '../../features/list/listSlice';
import { useState } from 'react';

const List = () => {
    const { toDoList } = useSelector((state) => state.list);
    const [ btnClass, setBtnClass ] = useState(false);

    const dispatch = useDispatch();  


    return( 
        <div>
            <div className='list-container'>
              {toDoList.map((el) => {
                return (<span onClick={() => {
                if(el.isChecked === false){
                    dispatch(check(el.title))
                    return;
                } else
                    dispatch(unCheck(el.title));

                btnClass === false ? setBtnClass(true) : setBtnClass(false);
                }} className={ el.isChecked === true? "list-element clicked" : "list-element unclicked" } >{el.title}</span>)
              })}
          </div>
        </div>
    );
};

export default List;