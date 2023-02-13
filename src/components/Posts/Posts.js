import React from 'react'
import { makeStyles, Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import Post from './Post/Post'

const Posts = props => {
  const classes = useStyles()
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  return (
    <>
        <div>
          {
            !posts.length ? <CircularProgress /> : 
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
              {
                posts.map((post) => (
                  <Grid item key={post._id}>
                      <Post post={post} />
                  </Grid>
                ))
              }
            </Grid>
          }
        </div>
    
    </>
  )
}

export default Posts

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: theme.spacing(1),
  actionDiv: { textAlign: 'center' },
}))
