import { Routes, Route, Link } from 'react-router-dom';

import '@sippy-platform/mellow-css/dist/css/mellow.css';
import '@sippy-platform/valkyrie/dist/valkyrie.css';
import './mellow-ui.css';

import AlertDemo from './docs/AlertDemo';
import Demos from './Demos';

function App() {
  return (
    <>
      <div className="my-3 container">
        <h1 className="marketing-4 fw-bold text-marketing">Mellow UI</h1>
        <div className="btn-toolbar">
          <Link className="btn btn-default" to="/">Home</Link>
          <Link className="btn btn-default" to="/alert">Alert</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Demos />} />
        <Route path="/alert" element={<AlertDemo />} />
      </Routes>
    </>
  );
}

export default App;
