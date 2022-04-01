import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ImageList from './images/ImageList';
import { Link } from 'react-router-dom';
import ROOT_URL from './utilities/ROOT_URL';
import GetErrorDialog from './utilities/Dialogs/GetErrorDialog';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Button, ListSubheader, Switch } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {  ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarHeader: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#F5F5F1'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'theme.palette.background.default',
    padding: theme.spacing(3),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Layout(props) {
  const [topics, setTopics] = useState([])
  const [error, setError] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#221F1F'
      },
      primary: {
        main: '#E50914',
        contrastText: 'white',
      },
      secondary: {
        main: '#221f1f',
        contrastText: 'white',
      }
    }
  })
 function handleThemeChange () {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    fetch(`${ROOT_URL}?client_id=KxMic2uEvSGnv4rBlsrycR1nO7IgMERswZ4eGq1s6f0`, {
        }
    )
    .then(res => {
        if(!res.ok) {
            setErrorCode(res.status)
            throw Error(`${res.status} - ${res.statusText}`)
        }
        return res.json()
    })
    .then(data => {
        setTopics(data)
        console.log(topics)
        setIsLoading(false)
        setError(null)
        setErrorCode(null)
        setOpenErrorDialog(false)
    })
    .catch(err => {
        setError(err.message)
        setOpenErrorDialog(true)
        setIsLoading(false)
    })
  }, [])

  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    history.push('/')
  };

  return (
    <ThemeProvider theme = {theme}>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{flexGrow:1}}>
            SpanTube
          </Typography>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="subtitle2" noWrap style={{flexGrow:1}}>
              dark mode
            </Typography>
            <Switch checked={darkMode}  onChange={handleThemeChange} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography component={Button} onClick={handleRedirect} button variant="h6" color= 'primary' className={classes.appBarHeader} style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 20}}>
            {/* <ArrowBackIosIcon style={{marginRight: 10}}/> */}
            <HomeIcon fontize='large'  color='secondary'/>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListSubheader>
            <CategoryIcon style ={{marginRight:10}}/>
              Topics
          </ListSubheader>
          {topics.map((topic) => (
            <ListItem
              component ={Link} 
              to={`/images/${topic.slug}`}
              button
              key={topic.id}
            >
            <ListItemText color='white' inset primary={topic.slug} />
          </ListItem>
          ))  
          }
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
      <GetErrorDialog openErrorDialog={openErrorDialog} error={error} errorCode={errorCode}/>
    </div>
    </ThemeProvider>
    
  );
}