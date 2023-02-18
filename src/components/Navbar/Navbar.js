import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material' 
import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
import pic from '../../assets/images/pic.png'

const Navbar = () => {
    const classes = useStyles()
    const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit' >
        <div className={classes.brandContainer}>
            <Typography component={Link} to = '/' variant='h2' align='center' className={classes.heading} >NewsBlog</Typography>
            <img className={classes.image} src={pic} alt='logo' height={50} width={50} />
        </div>
        <Toolbar className={classes.toolbar}>
            {user? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={`${user.name}`} src={`${user.imageUrl}`}>{user.name.charAt(0)}</Avatar>
                    <Typography variant='h6'  className={classes.username} >{user.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
                </div>
            ) : (
                <div>
                    <Button variant='contained' component={Link} to = '/auth'  color='primary'>Sign In</Button>
                </div>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

const useStyles = makeStyles((theme) => ({
    appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '30px 0',
      borderRadius: 15,
      padding: '10px 50px',
    },
    heading: { color: 'rgba(0, 183, 225, 1)', textDecoration: 'none' },
    image: { marginLeft: '15px' },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    username: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        backgroundColor: deepPurple[500],
        color: theme.palette.getContrastText(deepPurple[500]),
    },
    avatar: {},
    logout: {}
 
  }))
  