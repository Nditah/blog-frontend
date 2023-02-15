import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment   from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, removePost } from '../../../actions/post';

 
const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile ? post.selectedFile : '../src/assets/images/pic.png' } title={post.title} />
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.user}</Typography>
          <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>

        <div className={classes.overlay2}>
          <Button style={{color: 'yellow'}} size='large' onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize='large' />
          </Button>
        </div>

        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary'>
            { post.tags.map((tag) => (`#${tag.trim()} `))}
          </Typography>          
        </div>
          <Typography variant='h5' className={classes.title} gutterBottom>{ post.title }</Typography>  

        <CardContent>
          <Typography variant='body2' color={'textSecondary'} component={'p'} gutterBottom dangerouslySetInnerHTML={{ __html: post.content }}>
            </Typography>  
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize='small' />
           &nbsp; Like &nbsp;  {post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={() => dispatch(removePost(post._id))}>
            <DeleteIcon fontSize='small' />
            &nbsp;  Delete 
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

Post.propTypes = {}

export default Post

export const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: { border: 'solid'},
  fullHeightCard: { height: '100%' },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '26px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px, 8px, 16px',
  }
}))