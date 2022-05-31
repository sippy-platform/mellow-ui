import { Routes, Route } from 'react-router-dom';

import '../mellow-ui.css';
import '@sippy-platform/mellow-css/dist/css/mellow.css';
import '@sippy-platform/valkyrie/dist/valkyrie.css';

import AlertDemo from './pages/Components/AlertDemo';
import AvatarDemo from './pages/Components/AvatarDemo';
import BottomBarDemo from './pages/Components/BottomBarDemo';
import BreadcrumbDemo from './pages/Components/BreadcrumbDemo';
import ButtonDemo from './pages/Components/ButtonDemo';
import CardDemo from './pages/Components/CardDemo';
import CheckboxDemo from './pages/Forms/CheckboxDemo';
import ContainerDemo from './pages/Layout/ContainerDemo';
import DialogDemo from './pages/Components/DialogDemo';
import GridDemo from './pages/Layout/GridDemo';
import InputDemo from './pages/Forms/InputDemo';
import InputLabelDemo from './pages/Forms/InputLabelDemo';
import Installation from './pages/GetStarted/Installation';
import LabelDemo from './pages/Components/LabelDemo';
import Layout from './components/Layout';
import ListDemo from './pages/Components/ListDemo';
import MenuDemo from './pages/Components/MenuDemo';
import OffcanvasDemo from './pages/Components/OffcanvasDemo';
import PivotDemo from './pages/Components/PivotDemo';
import ProgressDemo from './pages/Components/ProgressDemo';
import RadioDemo from './pages/Forms/RadioDemo';
import RangeDemo from './pages/Forms/RangeDemo';
import SelectDemo from './pages/Forms/SelectDemo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/alert" element={<AlertDemo />} />
        <Route path="/avatar" element={<AvatarDemo />} />
        <Route path="/bottombar" element={<BottomBarDemo />} />
        <Route path="/breadcrumb" element={<BreadcrumbDemo />} />
        <Route path="/button" element={<ButtonDemo />} />
        <Route path="/card" element={<CardDemo />} />
        <Route path="/checkbox" element={<CheckboxDemo />} />
        <Route path="/container" element={<ContainerDemo />} />
        <Route path="/dialog" element={<DialogDemo />} />
        <Route path="/grid" element={<GridDemo />} />
        <Route path="/input" element={<InputDemo />} />
        <Route path="/inputlabel" element={<InputLabelDemo />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/label" element={<LabelDemo />} />
        <Route path="/list" element={<ListDemo />} />
        <Route path="/menu" element={<MenuDemo />} />
        <Route path="/offcanvas" element={<OffcanvasDemo />} />
        <Route path="/pivot" element={<PivotDemo />} />
        <Route path="/progress" element={<ProgressDemo />} />
        <Route path="/radio" element={<RadioDemo />} />
        <Route path="/range" element={<RangeDemo />} />
        <Route path="/select" element={<SelectDemo />} />
      </Routes>
    </Layout>
  );
}

export default App;
