import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/post";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    content: "",
    tags: [""],
    selectedFile: "",
  });
  const article = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  useEffect(() => {
    if (article) setPostData(article)
  }, [article])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handleClear()
  };

  const handleClear = () => {
    setCurrentId(null)
    setPostData({
      user: "",
      title: "",
      content: "",
      tags: [""],
      selectedFile: "",
    })
  };


  return (
    <div>
      <Paper className={classes.paper}>
        <form
          className={`${classes.root} ${classes.form}`}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">{ currentId ? 'Editing' : 'Creating '} Article</Typography>
          <TextField
            name="user"
            variant="outlined"
            label="Creator"
            value={postData.user}
            onChange={(e) => setPostData({ ...postData, user: e.target.value })}
            fullWidth
          />

          <TextField
            name="title"
            variant="outlined"
            label="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            fullWidth
          />

          <TextField
            name="tags"
            variant="outlined"
            label="Keywords"
            value={postData.tags.join(',')}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
            fullWidth
          />

          <TextareaAutosize
            name="content"
            variant="outlined"
            label="Content"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            minRows={10}
            placeholder="Enter the content"
            style={{ width: '94%', margin:'10px', fontFamily: 'serif', fontSize: '24' }}
          />

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>

          <Button
            type="submit"
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
          <Button
            onClick={handleClear}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": { margin: theme.spacing(1) },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  textarea: {
    width: "100%",
  },
  richTextEditor: {
    width: "100%",
    marginTop: 10,
    marginBottom: 60,
  },
}));
