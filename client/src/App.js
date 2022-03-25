import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
         <Route path="/" element={<Auth/>} />
        {/*<Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
