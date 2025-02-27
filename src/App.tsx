import './App.css'
import Resume from './components/Resume';
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
