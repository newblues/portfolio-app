import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Col, Badge } from 'reactstrap';

const styles = theme => ({
  cardHeader: {
  },
  card: {
    marginBottom: 50
  },
  media: {
    height: 140,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    padding: 8,
    backgroundColor: red[500]
  }
});

class Project extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    
    let stackFront = this.props.stack_front.map((e, i) => {
      return (
        <Badge key={i} color='secondary' style={{ padding: 5, margin: 5 }}>
          {e}
        </Badge>
      );
    });

    let stackBack = this.props.stack_back.map((e, i) => {
      return (
        <Badge key={i} color='secondary' style={{ padding: 5, margin: 5 }}>
          {e}
        </Badge>
      );
    });

    const { classes } = this.props;

    return (
      <Col id='portfolio'  xs='12' md='6' lg='4'>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                aria-label='Recipes'
                src={this.props.pic_url}
                className={classes.avatar}
              />
            }
            //   action={
            //     <IconButton>
            //       <MoreVertIcon />
            //     </IconButton>
            //   }
            title={this.props.name}
            // subheader={this.props.desc}
          />
          <CardMedia
            className={classes.media}
            image='https://picsum.photos/200/?random'
            title={this.props.name}
          />
          <CardContent>
            <Typography component='p'>{this.props.desc}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            {/* <IconButton aria-label='Share'>
              <ShareIcon />
            </IconButton> */}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Stack Front</Typography>
              <Typography paragraph>{stackFront} : </Typography>
              <Typography paragraph>Stack Back</Typography>
              <Typography paragraph>{stackBack}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Col>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
