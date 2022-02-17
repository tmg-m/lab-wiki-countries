import { Link, Outlet } from 'react-router-dom';
import Navbar from './routes/Navbar';

function App() {
  return (
    <div>
      <nav>
        <Navbar />
        <Link to="/countryList">List</Link>
        <br></br>
        <Link to="/countryDetails">Detail</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
