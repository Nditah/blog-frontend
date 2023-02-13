import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import pic from '../src/assets/images/pic.png'
import { getPosts } from './actions/post'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
        <AppBar position='static' color='inherit' className={classes.appBar}>
          <Typography className={classes.heading} variant='h2' align='center'>News Blogposts</Typography>
          <img alt='NewsBlog' src={pic} height={50} width={50} className={classes.image} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
              <Grid item xs={12} sm={7}> <Posts /></Grid>
              <Grid item xs={12} sm={4}> <Form /></Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
  )
}

export default App
