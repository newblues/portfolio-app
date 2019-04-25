import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import colors from '../config.js';
import { connect } from 'react-redux';

import { HashLink as Link } from 'react-router-hash-link';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const style = {
  container: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 'bold',
    width: '100%',
    zIndex: '1000',
  },
  logo: {
    color: colors.brownColor,
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const { language } = this.props;

    return (
      <Navbar
        id="navbar"
        style={style.container}
        className="fixed-top animated fadeInDown delay-0.8s"
        color="light"
        light
        expand="md"
      >
        <NavbarBrand className="link" href="/">
          〈 A.S 〉
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="link" to="/#home">
                {language === 'fr' ? 'Accueil' : 'Home'}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/#aboutme">
                {language === 'fr' ? 'A propos' : 'About me'}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/#skills">
                {language === 'fr' ? 'Compétences' : 'Skills'}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/#portfolio">
                Portfolio
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

export default connect(
  mapStateToProps,
  null,
)(NavBar);
