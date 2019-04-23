import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Project from './Project';

// REDUX
import { connect } from 'react-redux';

class PortfolioScreen extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  componentDidMount = () => {
    // API ALL PROJECTS
    fetch('https://capsule-exams.herokuapp.com/api/capsule/projects')
      .then(res => res.json())
      .then(data => {
        this.props.handleProjects(data.projects);
      })
      .catch(err => console.log('Erreur Fetch Api Projects----->',err));
  };

  render() {
    const projects = this.props.fetchProjects;

    const projectsList = projects.map((project, i) => {
      return (
        <Project
          name={project.name}
          desc={project.desc}
          pic_url={project.pic_url}
          stack_back={project.stack_back}
          stack_front={project.stack_front}
          days_spent={project.days_spent}
          idproject={project.idproject}
          displayOnlyLike={this.props.viewonlylike}
          key={i}
        />
      );
    });

    return (
      <div>
        <div style={styles.main} />
        <Container>
          <Row>{projectsList}</Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  main: {
    position: 'fixed',
    top: 54,
    left: 0,
    width: '100%',
    zIndex: 999999
  },
  alert: {
    margin: '0 auto'
  }
};

function mapDispatchToProps(dispatch) {
  return {
    handleProjects: function(projects) {
      dispatch({
        type: 'getprojects',
        projects
      });
    }
  };
}

function mapStateToProps(state) {
  return {
    fetchProjects: state.projects
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioScreen);
