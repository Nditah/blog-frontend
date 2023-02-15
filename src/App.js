import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import pic from '../src/assets/images/pic.png'
import { fetchAllPosts } from './actions/post'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'


const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [currentId, dispatch])

  return (
      <Container maxWidth='lg'>
          <AppBar position='static' color='inherit' className={classes.appBar}>
            <Typography className={classes.heading} variant='h2' align='center'>News Blogposts</Typography>
            <img alt='NewsBlog' src={pic} height={50} width={50} className={classes.image} />
          </AppBar>
          <Grow in>
            <Container>
              <Grid className={classes.mainContainer} container  spacing={4} justifyContent ='space-between' alignItems ='stretch'>
                <Grid item xs={12} sm={6}> <Posts setCurrentId={setCurrentId} /></Grid>
                <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId} /></Grid>
              </Grid>
            </Container>
          </Grow>
      </Container>
  );
}

export default App

const useStyles = makeStyles((theme) => ({
  appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0',
      borderRadius: 15,
  },
  heading: {
      color: 'rgba(0, 183, 255, 1)',
  },
  image: {
      marginLeft: '15px'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column-reverse',

    }
  },
}))