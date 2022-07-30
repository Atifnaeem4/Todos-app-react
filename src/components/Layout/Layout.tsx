import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import theme from '../themes/index';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles(() => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
    },
    flex: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  };
});

const drawerWidth = 240;

export default function Layout(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
      >
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
      path: '/Create',
    },
  ];

  return (
    <div className={classes.flex}>
      <AppBar
        sx={{ width: `calc(100% - ${drawerWidth}px)` }}
        style={{ background: '#e0f7fa' }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            color="textPrimary"
            variant="h5"
            sx={{ flexGrow: 1 }}
          >
            Welcome to Notes, Today is{' '}
            {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography color="textPrimary" sx={{ mr: 1 }} variant="h6">
            Mario
          </Typography>
          <Avatar src="/mario-avt.png" />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={{ padding: 2 }}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path
                  ? classes.active
                  : undefined
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
}
