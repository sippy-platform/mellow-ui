import { Routes, Route, Link } from 'react-router-dom';

import '@sippy-platform/mellow-css/dist/css/mellow.css';
import '@sippy-platform/valkyrie/dist/valkyrie.css';
import '../mellow-ui.css';

import AlertDemo from './pages/AlertDemo';
import AvatarDemo from './pages/AvatarDemo';
import BottomBarDemo from './pages/BottomBarDemo';
import BreadcrumbDemo from './pages/BreadcrumbDemo';
import ButtonDemo from './pages/ButtonDemo';
import CheckboxDemo from './pages/CheckboxDemo';
import Home from './pages/Home';
import CardDemo from './pages/CardDemo';
import GridDemo from './pages/GridDemo';
import ContainerDemo from './pages/ContainerDemo';
import DialogDemo from './pages/DialogDemo';
import InputDemo from './pages/InputDemo';
import InputLabelDemo from './pages/InputLabelDemo';
import LabelDemo from './pages/LAbelDemo';
import ListDemo from './pages/ListDemo';
import OffcanvasDemo from './pages/ListDemo';
import PivotDemo from './pages/PivotDemo';
import ProgressDemo from './pages/ProgressDemo';
import RadioDemo from './pages/RadioDemo';
import RangeDemo from './pages/RangeDemo';
import SelectDemo from './pages/SelectDemo';

function App() {
  return (
    <>
      <div className="my-3 container">
        <h1 className="marketing-4 fw-bold text-marketing">Mellow UI</h1>
        <div className="btn-toolbar">
          <Link className="btn btn-default btn-sm" to="/">Home</Link>
          <div className="btn-group">
            <Link className="btn btn-default btn-sm" to="/alert">Alert</Link>
            <Link className="btn btn-default btn-sm" to="/avatar">Avatar</Link>
            <Link className="btn btn-default btn-sm" to="/bottombar">Bottom Bar</Link>
            <Link className="btn btn-default btn-sm" to="/breadcrumb">Breadcrumb</Link>
            <Link className="btn btn-default btn-sm" to="/button">Button</Link>
            <Link className="btn btn-default btn-sm" to="/card">Card</Link>
            <Link className="btn btn-default btn-sm" to="/container">Container</Link>
            <Link className="btn btn-default btn-sm" to="/checkbox">Checkbox</Link>
            <Link className="btn btn-default btn-sm" to="/grid">Grid</Link>
            <Link className="btn btn-default btn-sm" to="/dialog">Dialog</Link>
            <Link className="btn btn-default btn-sm" to="/input">Input</Link>
            <Link className="btn btn-default btn-sm" to="/inputlabel">Input Label</Link>
            <Link className="btn btn-default btn-sm" to="/label">Label</Link>
            <Link className="btn btn-default btn-sm" to="/list">List</Link>
            <Link className="btn btn-default btn-sm" to="/offcanvas">Offcanvas</Link>
            <Link className="btn btn-default btn-sm" to="/pivot">Pivot</Link>
            <Link className="btn btn-default btn-sm" to="/progress">Progress</Link>
            <Link className="btn btn-default btn-sm" to="/radio">Radio</Link>
            <Link className="btn btn-default btn-sm" to="/range">Range</Link>
            <Link className="btn btn-default btn-sm" to="/select">Select</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alert" element={<AlertDemo />} />
        <Route path="/avatar" element={<AvatarDemo />} />
        <Route path="/bottombar" element={<BottomBarDemo />} />
        <Route path="/breadcrumb" element={<BreadcrumbDemo />} />
        <Route path="/button" element={<ButtonDemo />} />
        <Route path="/card" element={<CardDemo />} />
        <Route path="/checkbox" element={<CheckboxDemo />} />
        <Route path="/grid" element={<GridDemo />} />
        <Route path="/container" element={<ContainerDemo />} />
        <Route path="/dialog" element={<DialogDemo />} />
        <Route path="/input" element={<InputDemo />} />
        <Route path="/inputlabel" element={<InputLabelDemo />} />
        <Route path="/label" element={<LabelDemo />} />
        <Route path="/list" element={<ListDemo />} />
        <Route path="/offcanvas" element={<OffcanvasDemo />} />
        <Route path="/pivot" element={<PivotDemo />} />
        <Route path="/progress" element={<ProgressDemo />} />
        <Route path="/radio" element={<RadioDemo />} />
        <Route path="/range" element={<RangeDemo />} />
        <Route path="/select" element={<SelectDemo />} />
      </Routes>
    </>
  );
}

export default App;
