import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { amber, purple, blueGrey } from '@material-ui/core/colors';

import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



const backgroundImage = 'https://ifh.cc/g/bb9DS0.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[800]),
    backgroundColor: blueGrey[800],
    '&:hover': {
      backgroundColor: blueGrey[900],
    },
  },
}))(Button);


function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        HGU HISSTUDY
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Why not change the world?
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup"
      > */}
      <ColorButton
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signin"
      >
        Start
      </ColorButton>
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
