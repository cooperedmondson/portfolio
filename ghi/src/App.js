import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contain from './components/Contain';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Contain/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}