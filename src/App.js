import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import AllRoutes from './AllRoutes.jsx';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question.js';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
