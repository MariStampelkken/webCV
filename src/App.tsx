import RouterConfig from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './global.css';

function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  );
}

export default App;
