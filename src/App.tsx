import { useEffect, useState } from 'react';
import './App.css'
import Resume from './components/Resume';
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router';

function App() {

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000)
  }, [])

  return (
    <>
      {
        loading ? (
            <div className="flex justify-center py-[20%]">
                <div className="loader" />
            </div>
        ) : (
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
    </>
  )
}

export default App
