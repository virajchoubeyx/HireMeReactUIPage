import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main, Feed} from './Components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/employee/feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
