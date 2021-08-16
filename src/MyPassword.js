import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import Divider from '@material-ui/core/Divider';
import { email, required } from './form/validation';
import RFTextField from './form/RFTextField';
import FormButton from './form/FormButton';
import FormFeedback from './form/FormFeedback';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        minHeight:400,
        margin : 100,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title1: {
        fontSize: 20,
    },
    title2: {
        fontSize: 13,
    },
    pos: {
        marginBottom: 12,
    },
}));


function MyPassword() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return ( 
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title1} color="black" gutterBottom>
                Password
            </Typography>
            <Typography className={classes.title2} color="textSecondary" gutterBottom>
                Update password
            </Typography>
            <Divider variant="middle" />

            <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="Password"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="confirmpassword"
                autoComplete="Confirm Password"
                label="Confirm Password"
                type="Confirm password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                size="large"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'UPDATE'}
              </FormButton>
            </form>
          )}
        </Form>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card> 
  );
}

export default withRoot(MyPassword);