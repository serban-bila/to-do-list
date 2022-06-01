import './modal.styles.scss';
import { useDispatch } from "react-redux";
import { close } from '../../features/modal/modalSlice';
import { clearList } from '../../features/list/listSlice';

const Modal = () => {
    const dispatch = useDispatch();

    return(
        <div className='modal-container'>
            <div className='modal'>
                <h3>Are you sure you want to delete all notes?</h3>
                <div className='btn-container'>
                    <button className='clear' onClick={() => {dispatch(close()); dispatch(clearList())}}>CONFIRM</button>
                    <button className='close' onClick={() => dispatch(close())}>CLOSE</button>
                </div>
            </div>
        </div> 
    );
};

export default Modal;