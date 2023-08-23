import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Movie from "./components/Movie/Movie"
import BookForm from "./components/BookForm/BookForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/movie/:id" element={<Movie />} />
           <Route exact path="/form/:id" element={<BookForm />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
