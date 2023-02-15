import React, { useEffect, useState  } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';
import Posts from './../Posts/Posts'
import Form from './../Form/Form'
import { fetchAllPosts } from '../../actions/post'

const Home = () => {
  const classes = useStyles()
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [currentId, dispatch])

  return (
    <div>
    <Grow in>
    <Container>
        <Grid className={classes.mainContainer} container  spacing={4} justifyContent ='space-between' alignItems ='stretch'>
        <Grid item xs={12} sm={6}> <Posts setCurrentId={setCurrentId} /></Grid>
        <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId} /></Grid>
        </Grid>
    </Container>
    </Grow>
    </div>
  )
}

export default Home

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
  
      }
    },
  }))