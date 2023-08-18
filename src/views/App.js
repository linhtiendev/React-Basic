import logo from './logo.svg';
import './App.scss';
import TestComponent from './Example/TestComponent';

/**
 * có 2 loại components
 * class component / function component (function, arrow)
 *  
 */

// const App  = () => {
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world with Liti
        </p>
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
