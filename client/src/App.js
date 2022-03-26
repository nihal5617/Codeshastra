import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
         <Route path="/" element={<Main/>} />
        {/*<Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
