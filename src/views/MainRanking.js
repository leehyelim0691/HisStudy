import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import {Route, Switch,Redirect, Link,BrowserRouter as Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';


const styles = (theme) => ({
  root: {
    // height:800,
    display: 'flex',
    // backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  time: {
    marginTop : theme.spacing(-50),
    marginBottom : theme.spacing(-50)
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  // image: {
  //   height: 55,
  //   marginTop: theme.spacing(4),
  //   marginBottom: theme.spacing(4),
  // },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
  timeline: {
    // transform: "rotate(90deg)"
  },
  timeline: {
    transform: "rotate(-90deg)",
    // height:600
  },
  timelineContentContainer: {
    // textAlign: "left"
  },
  timelineContent: {
    display: "inline-block",
    // transform: "rotate(90deg)",
    textAlign: "center",
    minWidth: 50
  },
  timelineIcon: {
    transform: "rotate(90deg)"
  },
  paper: {
    transform: "rotate(90deg)",
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
    height : 300
  },
  timelineConnector:{
    height : 300
  },
});


function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Ranking
        </Typography>
        <div className={classes.time}>
        <Timeline align="alternate" className={classes.timeline} >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon className={classes.timelineIcon}/>
          </TimelineDot>
          <TimelineConnector className={classes.timelineConnector}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={10} className={classes.paper}>
            <Typography variant="h6" component="h1">
              헬로월드TEAM
            </Typography>
            {/* <Typography>헬로월드헬로월드헹ㄹ로월드</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon className={classes.timelineIcon}/>
          </TimelineDot>
          <TimelineConnector className={classes.timelineConnector}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              멍멍TEAM
            </Typography>
            <Typography>멍머렁멍멍ㅁ엄엄ㅇ멍ㅁ엄엄엄ㅇ멍ㅁ엄엄엄어멍</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon className={classes.timelineIcon}/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={10} className={classes.paper}>
            <Typography variant="h6" component="h1">
              3등TEAM
            </Typography>
            {/* <Typography>3등팀~~~</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon className={classes.timelineIcon}/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={10} className={classes.paper}>
            <Typography variant="h6" component="h1">
              4
            </Typography>
            {/* <Typography>Whynotchangetheworld?</Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
