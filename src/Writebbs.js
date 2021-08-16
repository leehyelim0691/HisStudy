import withRoot from './withRoot';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      left: 450,
      margin: theme.spacing(7), 
      width: '100ch',
    },
  },
}));

function Writebbs() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <AppAppBar />
    
        <form className={classes.root} noValidate autoComplete="off">
        
         <TextField id="standard-basic" label="제목" variant="outlined" />
        
        <TextField id="outlined-basic" label="게시글 작성" variant="outlined" multiline
          rows={10} />
      
        
        <Button variant="contained" color="primary" href="#contained-buttons" size = "small">
          작성 완료
        </Button>
        
         
        </form>
        
    <AppFooter />
    </React.Fragment>
  );
}
export default withRoot(Writebbs);