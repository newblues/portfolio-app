/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import ScrollAnimation from 'react-animate-on-scroll';
import colors from '../config';

import '../App.css';

const email = 'anto.sauvage@gmail.com';

class AboutMe extends Component {
  render() {
    const { language } = this.props;

    return (
      <div style={style.container} id="aboutme">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              {language === 'fr' ? (
                <h3 className="sectionTitle">Profil</h3>
              ) : (
                <h3 className="sectionTitle">Profile</h3>
              )}
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="4" className="text-center flex-column justify-content-center">
              <ScrollAnimation animateIn="bounceIn">
                <img style={style.logo} src={require('../images/story.svg')} alt="Logo" />
              </ScrollAnimation>
              {language === 'fr' ? (
                <div>
                  <h4 className="sectionSubtitle">À propos</h4>
                  <p>
                    "Bonjour à tous ! Passionné de code depuis toujours, j’intègre le Bootcamp de La
                    Capsule à Paris début 2019. Après dix semaines de travail intensif, deux mois en
                    tant que "Teacher assistant" et le lancement de ma première application mobile,
                    je suis prêt pour de nouveaux projets !"
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="sectionSubtitle">About me</h4>
                  <p>
                    "Hello World! Fan about code since always, I join La Capsule's Bootcamp in Paris
                    early 2019. After ten weeks of intensive work, two months as "Teacher Assistant"
                    and the launch of my first mobile app, I'm ready for new projects! "
                  </p>
                </div>
              )}
            </Col>
            <Col xs="12" md="4" className="text-center">
              <img
                className="shadow rounded rounded-circle"
                style={style.image}
                src={require('../images/as_square.jpg')}
                alt="Antoine"
              />
            </Col>
            <Col xs="12" md="4" className="text-center">
              <ScrollAnimation className="md-mt" animateIn="bounceIn">
                <img style={style.logo} src={require('../images/resume.svg')} alt="Logo" />
              </ScrollAnimation>
              {language === 'fr' ? (
                <div>
                  <h4 className="sectionSubtitle">Informations </h4>
                  <p style={style.infoText}>Nom : Antoine Sauvage</p>
                  <p style={style.infoText}>Âge : 35 ans</p>
                  <p style={style.infoText}>
                    Email :{' '}
                    <a className="aMail" href={`mailto:${email}`}>
                      anto.sauvage@gmail.com
                    </a>
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="sectionSubtitle">Personal Details </h4>
                  <p style={style.infoText}>Full name : Antoine Sauvage</p>
                  <p style={style.infoText}>Age : 35 years old</p>
                  <p style={style.infoText}>
                    Email :{' '}
                    <a className="aMail" href={`mailto:${email}`}>
                      anto.sauvage@gmail.com
                    </a>
                  </p>
                </div>
              )}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontFamily: 'Montserrat',
  },
  image: {
    borderRadius: '50%',
    width: 220,
    height: 220,
  },
  infoText: {
    color: colors.greyColor,
    margin: '0 0 16 0',
    // padding: '13px 0px',
    borderBottom: 'solid #AB9B96 1px',
    textAlign: 'left',
  },
  logo: {
    width: 60,
    margin: '0px 0px 20px 0px',
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
)(AboutMe);
