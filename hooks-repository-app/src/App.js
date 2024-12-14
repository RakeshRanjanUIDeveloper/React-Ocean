import logo from './logo.svg';
import './App.css';
import UserFilter from './Hooks/UseMemo/UserFilter';
import ParentCounter from './Hooks/UseCallback/ParentCounter';
import AccessDOM from './Hooks/UseRef/AccessDOM';
import StoreNonUI from './Hooks/UseRef/StoreNonUI';
import KeepPrevious from './Hooks/UseRef/KeepPrevious';
import TodoApp from './Hooks/UseReducer/TodoApp';
import Counter from './Hooks/UseReducer/Counter';

function App() {
  return (
    <div className="App">
        <h1>Learn about below listed Hooks</h1>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>useRef</li>
          <li>useReducer</li>
        </ul>

        <TodoApp />
        <Counter />
    </div>
  );
}

export default App;
