import Header from "./components/Header";
import { BrowserRouter, Route } from 'react-router-dom';
import ActiveEvents from "./pages/ActiveEvents";

function App() {
  return (
    <div className="">
      <Header/>
      <div className='' style={{marginTop:'7rem'}}>
        <ActiveEvents/>
      </div>
      
    </div>
  );
}

export default App;
