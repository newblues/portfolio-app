/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import ScrollAnimation from 'react-animate-on-scroll';

import '../App.css';

class Skills extends Component {
  render() {
    const { language } = this.props;

    return (
      <div style={style.container} id="skills">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <h3 className="sectionTitle">{language === 'fr' ? 'Compétences' : 'Skills'}</h3>
            </Col>
          </Row>
          <Row>
            <Col style={style.col} xs="12" sm="4">
              <ScrollAnimation animateIn="bounceIn">
                <img style={style.logo} src={require('../images/coding.svg')} alt="Logo" />
              </ScrollAnimation>
              <h4 className="sectionSubtitle">Front-End</h4>
              <p style={style.p}>React JS, React Native, Expo</p>
              <p style={style.p}>JavaScript ES6/ES7/ES8/ES9, JQuery</p>
              <p style={style.p}>HTML5, CSS, Sass, Less</p>
              <p style={style.p}>Styled components</p>
              <p style={style.p}>Redux, Redux-Thunk, Redux-Saga</p>
              <p style={style.p}>React Router, Hooks, Context Api</p>
              <p style={style.p}>Jest, Ensyme, ESLint</p>
            </Col>
            <Col style={style.col} xs="12" sm="4">
              <ScrollAnimation className="sm-mt" animateIn="bounceIn">
                <img style={style.logo} src={require('../images/cloud.svg')} alt="Logo" />
              </ScrollAnimation>
              <h4 className="sectionSubtitle">Back-End</h4>
              <p style={style.p}>NodeJS</p>
              <p style={style.p}>Express</p>
              <p style={style.p}>Rest API, GraphQL</p>
              <p style={style.p}>Firebase</p>
              <p style={style.p}>MongoDB</p>
              <p style={style.p}>Stripe</p>
              <p style={style.p}>Cloudinary</p>
            </Col>
            <Col style={style.col} xs="12" sm="4">
              <ScrollAnimation className="sm-mt" animateIn="bounceIn">
                <img style={style.logo} src={require('../images/settings.svg')} alt="Logo" />
              </ScrollAnimation>
              <h4 className="sectionSubtitle">DevOps</h4>
              <p style={style.p}>Npm, Yarn</p>
              <p style={style.p}>Webpack, Babel</p>
              <p style={style.p}>Git, GitHub</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minheight: '50vh',
    fontFamily: 'Montserrat',
    marginTop: 50,
    marginBottom: 50,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    margin: '0px 0px 20px 0px',
  },
  p: {
    margin: 0,
  },
};

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Skills);
