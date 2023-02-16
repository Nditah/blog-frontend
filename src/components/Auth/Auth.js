import React, { useEffect, useState  } from 'react'
import { Container, Grid, Avatar, Button, Paper, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';
import { LockOutlined } from '@mui/icons-material';
import Input from './Input';


const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    const isSignup = false

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
    const handleChange = (e) => {
        e.preventDefault()
    }
  
    const handleShowPassword = () => {
        return setShowPassword((prevShowPassword) => ! prevShowPassword)
    }

    useEffect(() => {
    }, [])

  return (
    <Container component={'main'} maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography variant='h5'>
                {isSignup ? 'Sign Up' : 'Login' }
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                   { isSignup && (
                        <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus isHalf />
                            <Input name='lastName' label='Last Name' handleChange={handleChange}  isHalf />
                        </>
                    )}
                    <Input name='email' label='Email Address' handleChange={handleChange}  type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} 
                      type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                    { isSignup && (
                        <>
                            <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange}  type= 'password' />
                        </>
                    )}
                </Grid>

                <Button type='submit' variant='contained' fullWidth color='primary' className={classes.googleButton} >
                    {isSignup ? 'Sign up' : 'Sign In' }
                    </Button>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
 
  }))
  