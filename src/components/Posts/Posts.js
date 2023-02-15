import React from 'react'
import { Grid, CircularProgress } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useSelector } from 'react-redux';

import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
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
                  <Grid item key={post._id} xs={12} sm={6}>
                      <Post post={post} setCurrentId={setCurrentId} />
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
