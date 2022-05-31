import Input from './components/input/input.component';
import List from './components/list/list.component';
import './App.css';

function App () {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <Input />
      <List />
    </div>
  );
};

export default App;
