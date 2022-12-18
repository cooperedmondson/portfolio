import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Main2 from './components/Main-2';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={[<Main/>, <Main2/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}