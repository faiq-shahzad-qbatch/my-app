// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Reactstrap from "./screens/Reactstrap";
import Tailwind from "./screens/Tailwind";
import NotFound from "./screens/NotFound";

// import { Navbar, NavItem } from 'reactstrap';

function App() {
  return (
    <div>
      <Router>
        {/* <h1>Navbar</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reactstrap">ReactStrap</Link></li>
            <li><Link to="/tailwind">Tailwind</Link></li>
          </ul>
        </nav> */}

        {/* <Navbar>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/reactstrap">ReactStrap</Link></NavItem>
          <NavItem><Link to="/tailwind">Tailwind</Link></NavItem>
        </Navbar> */}

        <Routes>
          {/* Define your routes using the Route component */}
          <Route path="/" element={<Homepage />} />
          <Route path="/reactstrap" element={<Reactstrap />} />
          <Route path="/tailwind" element={<Tailwind />} />
          {/* The NotFound component will be displayed for any undefined route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
