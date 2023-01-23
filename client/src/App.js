import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/index';
import ActiveEvents from './pages/ActiveEvents';
import Login from './pages/Login';
import { useEffect } from 'react';

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
            {/* <ActiveEvents /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
