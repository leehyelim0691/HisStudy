import withRoot from './withRoot';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(7), 
      width: '100ch',
    },
  },
}));

 function Bbs2() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <AppAppBar />
    
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" align="center" label="제목" />
        <TextField id="outlined-basic" label="게시글 작성" variant="outlined" />
        </form>
     
    <AppFooter />
    </React.Fragment>
  );
}
export default withRoot(Bbs2);