import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/index';
import Header from './components/Header';
import ActiveEvents from './pages/ActiveEvents';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <div className="" style={{ marginTop: '7rem' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/events" element={<ActiveEvents />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
