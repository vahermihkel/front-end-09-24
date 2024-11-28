import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/osta-kinkekaart">{t("giftcard")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">Kaardirakendus</Nav.Link>

            <NavDropdown title="Admini menüü" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tooted">Lisa toode</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tooted">Halda-tooteid</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/admin">Admini koduleht</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("ee")}>EE</button>
            <Nav.Link as={Link} to="/logi-sisse">Logi sisse</Nav.Link>
            <Nav.Link as={Link} to="/registreeru">Registreeru</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;