import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Icon from '@material-ui/core/Icon';
import { amber,blueGrey, blue, pink, yellow } from '@material-ui/core/colors';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: yellow[50]
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    size:150
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="./../assets/img/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              /> */}
              <Typography variant="h6" className={classes.title} style={{ fontSize: 35 }}>
                Study
              </Typography>
              {/* <Typography variant="h5">
                {'혼자 하기 어려운 공부를 같은 목표를 가진 사람들과 공부할 수 있어요!'}
                {', go for a mini-vacation just a few subway stops away from your home.'}
              </Typography> */}
              <Icon className="fas fa-user-edit" style={{ fontSize: 130, color:pink[600]  }}/>

            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              /> */}
              <Typography variant="h6" className={classes.title} style={{ fontSize: 35 }}>
                Ranking
              </Typography>
              {/* <Typography variant="h5">
                {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                {'your Sundays will not be alike.'}
              </Typography> */}
              <Icon className="fas fa-trophy" style={{ fontSize: 130, color:amber['A700'] }}/>

            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              /> */}
              <Typography variant="h6" className={classes.title} style={{ fontSize: 35 }}>
                Chatting
              </Typography>
              {/* <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography> */}
              <Icon className="fas fa-comments" style={{ fontSize: 130, color:blue[800]  }}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
