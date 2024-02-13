<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/index';
import Header from './components/Header';
import ActiveEvents from './pages/ActiveEvents';
import Login from './pages/Login';
=======
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveEvents from './pages/ActiveEvents';
>>>>>>> main

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="">
<<<<<<< HEAD
      <BrowserRouter>
        <Header />
        <div className="" style={{ marginTop: '7rem' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/events" element={<ActiveEvents />} />
          </Routes>
        </div>
      </BrowserRouter>
=======
      <Header />
      <div className="" style={{ marginTop: '7rem' }}>
        <ActiveEvents />
      </div>
>>>>>>> main
    </div>
  );
}

export default App;
