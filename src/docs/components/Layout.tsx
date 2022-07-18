import { Link, useNavigate } from "react-router-dom";
import { Container, List, ListItem } from "@components";

import './layout.scss';

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="docs-grid">
      <nav className="nav nav-dark bg-dark docs-navbar">
        <Container fluid>
          <Link className="nav-brand text-marketing fw-bold" to="/">
            Mellow UI
          </Link>

          <ul className="nav-bar me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Docs
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
      <div className="docs-sidebar">
        <aside className="docs-navigation">
          <List>
            <p className="h6 mb-2 mt-3 ms-3">Get started</p>
            <ListItem primary="Installation" onClick={() => navigate('/installation')} />
            <p className="h6 mb-2 mt-3 ms-3">Layout</p>
            <ListItem primary="Container" onClick={() => navigate('/container')} />
            <ListItem primary="Grid" onClick={() => navigate('/grid')} />
            <p className="h6 mb-2 mt-3 ms-3">Forms</p>
            <ListItem primary="Checkbox" onClick={() => navigate('/checkbox')} />
            <ListItem primary="Input" onClick={() => navigate('/input')} />
            <ListItem primary="Input Group" onClick={() => navigate('/inputgroup')} />
            <ListItem primary="Input Label" onClick={() => navigate('/inputlabel')} />
            <ListItem primary="Radio" onClick={() => navigate('/radio')} />
            <ListItem primary="Range" onClick={() => navigate('/range')} />
            <ListItem primary="Select" onClick={() => navigate('/select')} />
            <ListItem primary="Form Control" onClick={() => navigate('/formcontrol')} />
            <p className="h6 mb-2 mt-3 ms-3">Components</p>
            <ListItem primary="Alert" onClick={() => navigate('/alert')} />
            <ListItem primary="Avatar" onClick={() => navigate('/avatar')} />
            <ListItem primary="Bottom Bar" onClick={() => navigate('/bottombar')} />
            <ListItem primary="Breadcrumb" onClick={() => navigate('/breadcrumb')} />
            <ListItem primary="Button" onClick={() => navigate('/button')} />
            <ListItem primary="Card" onClick={() => navigate('/card')} />
            <ListItem primary="Dialog" onClick={() => navigate('/dialog')} />
            <ListItem primary="Label" onClick={() => navigate('/label')} />
            <ListItem primary="List" onClick={() => navigate('/list')} />
            <ListItem primary="Menu" onClick={() => navigate('/menu')} />
            <ListItem primary="Nav" onClick={() => navigate('/nav')} />
            <ListItem primary="Offcanvas" onClick={() => navigate('/offcanvas')} />
            <ListItem primary="Pivot" onClick={() => navigate('/pivot')} />
            <ListItem primary="Progress" onClick={() => navigate('/progress')} />
          </List>
        </aside>
      </div>
      <div className="docs-page">
        <Container className="mt-3">{children}</Container>
      </div>
    </div>
  );
}
