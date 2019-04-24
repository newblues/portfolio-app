import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import ScrollAnimation from 'react-animate-on-scroll';

import '../App.css';

import colors from '../config.js';

class Porfolio extends Component {
  render() {
    return (
      <div style={style.container} id='portfolio'>
        <Container>
          <Row>
            <Col xs='12' className='text-center'>
              <h3 className='sectionTitle'>Portfolio </h3>
            </Col>
          </Row>

          <Row className='rowPorfolio'>
            <Col
              xs='12'
              md='6'
              className='d-flex justify-content-center align-items-center'
            >
              <ScrollAnimation className='md-mb' animateIn='fadeInLeft'>
                <div className='shadow rounded projectImg'>
                  <img
                    className='projectImg'
                    style={style.img}
                    src='https://picsum.photos/1000?image=20'
                    alt='Logo'
                  />
                </div>
              </ScrollAnimation>
            </Col>
            <Col
              xs='12'
              md='6'
              className='d-flex flex-column justify-content-center align-items-center'
            >
              <div style={style.header}>
                <ScrollAnimation animateIn='bounceIn'>
                  <img
                    style={style.logo}
                    src={require('../images/programming.svg')}
                    alt='Logo'
                  />
                </ScrollAnimation>
                <h4 className='sectionSubtitle'>Project 1</h4>
              </div>
              <div className='project'>
                <p className='text-center'>
                  JSON Viewer is a web-based single page tool for viewing,
                  formatting, and validating JSON and some advance features like
                  loading external json api urls and error handling. It also
                  gives developers the ability to generate the path to any value
                  with a single click. Build Tools : Jsx, React, jest and
                  enzyme, Css(SASS, SMACSS Architecture), @react-ace Editor, NPM
                  , YARN, babel, etc.
                </p>
                <div style={style.projectbuttons}>
                  <Button
                    outline
                    color='secondary'
                    className='shadow p-2 rounded'
                  >
                    View Live Demo
                  </Button>{' '}
                  <Button
                    outline
                    color='secondary'
                    className='shadow p-2 rounded'
                  >
                    View on Github
                  </Button>{' '}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs='12'
              md='6'
              className='d-flex flex-column justify-content-center align-items-center'
            >
              <div style={style.header}>
                <ScrollAnimation animateIn='bounceIn'>
                  <img
                    style={style.logo}
                    src={require('../images/programming.svg')}
                    alt='Logo'
                  />
                </ScrollAnimation>
                <h4 className='sectionSubtitle'>Project 1</h4>
              </div>
              <div className='project'>
                <p className='text-center'>
                  JSON Viewer is a web-based single page tool for viewing,
                  formatting, and validating JSON and some advance features like
                  loading external json api urls and error handling. It also
                  gives developers the ability to generate the path to any value
                  with a single click. Build Tools : Jsx, React, jest and
                  enzyme, Css(SASS, SMACSS Architecture), @react-ace Editor, NPM
                  , YARN, babel, etc.
                </p>
                <div style={style.projectbuttons}>
                  <Button
                    outline
                    color='secondary'
                    className='shadow p-2 rounded'
                  >
                    View Live Demo
                  </Button>{' '}
                  <Button
                    outline
                    color='secondary'
                    className='shadow p-2 rounded'
                  >
                    View on Github
                  </Button>{' '}
                </div>
              </div>
            </Col>
            <Col
              xs='12'
              md='6'
              className='d-flex justify-content-center align-items-center'
            >
              <ScrollAnimation className='md-mt' animateIn='fadeInRight'>
                <div className='shadow rounded projectImg'>
                  <img
                    className='projectImg'
                    style={style.img}
                    src='https://picsum.photos/1000?image=20'
                    alt='Logo'
                  />
                </div>
              </ScrollAnimation>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontFamily: 'Montserrat'
  },
  containerImg: {
    boxShadow: '5px 5px 5px #9E9E9E'
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    width: 50,
    margin: '0px 20px 20px 0px'
  },
  img: {
    height: 200,
    width: 300
  },
  projectbuttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 25
  }
};

export default Porfolio;
