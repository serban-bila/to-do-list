import Input from './components/input/input.component';
import List from './components/list/list.component';
// import Buttons from './components/buttons/buttons.component';
import Modal from './components/modal/modal.component';

import './App.css';
import { useSelector} from 'react-redux';

function App () {
  const {isOpen} = useSelector((state) => state.modal);

  return (
    <div className="App">
      {isOpen &&
            <Modal />}
      <Input />
      {/* <Buttons /> */}
      <List />
    </div>
  );
};

export default App;
