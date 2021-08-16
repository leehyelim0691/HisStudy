import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar1 from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import SignIn from './../SignIn';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Button from '../components/Button';




const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title1: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    flexGrow: 1,
    marginLeft : 80
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

function AppAppBar(props) {
  const { classes } = props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Board", "Ranking", "Chatting"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? 
              <Button href="/bbs">
              <i class="fas fa-clipboard-list" ></i> 
              </Button>
              : 
              <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <List>
          <ListItem button key={'Board'} >
          <Button href= '/bbs'>
            <ListItemIcon>
                <i class="fas fa-clipboard-list" ></i> 
            </ListItemIcon>
            <ListItemText primary={'Board'} />
            </Button>
          </ListItem>
      </List>

      <List>
          <ListItem button key={'Ranking'} >
          <Button href= '/bbs'>
            <ListItemIcon>
                <i class="fas fa-clipboard-list" ></i> 
            </ListItemIcon>
            <ListItemText primary={'Ranking'} />
            </Button>
          </ListItem>
      </List>

      {/* <List>
          <ListItem button key={'Ranking'}>
            <ListItemIcon>
              <Button href="/ranking">
                <i class="fas fa-clipboard-list" ></i> 
              </Button>
            </ListItemIcon>
            <ListItemText primary={'Ranking'} />
          </ListItem>
      </List> */}
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>/
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />         
          </IconButton> */}
          {["left"].map((anchor) => (
        <React.Fragment key={"left"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      ))}

          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
            align="center"
          >
            {'HisStudy'}
          </Link>
          {auth && (
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              {/* <Button href="/signin">
               <MenuItem onClick={handleClose}>Sign In</MenuItem>
              </Button>
              <Button href="/signup">
               <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Button> */}

              <Button href="/mypage">
               <MenuItem onClick={handleClose}>21800607</MenuItem>
              </Button>
              <Button href="/signup">
               <MenuItem onClick={handleClose}>Sign Out</MenuItem>
              </Button>
                
                {/* <MenuItem href="/signup" onClick={handleClose}>Sign Up</MenuItem> */}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
