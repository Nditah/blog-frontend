import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

const Form = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    content: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  };

  const handleClear = () => {};
  

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          className={`${classes.root} ${classes.form}`}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Create Article</Typography>
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
            name="content"
            variant="outlined"
            label="Content"
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            fullWidth
          />

          <TextField
            name="tags"
            variant="outlined"
            label="Keywords"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            fullWidth
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

          <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth>Submit</Button>
          <Button onClick={handleClear} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </form>
      </Paper>
    </div>
  );
};

Form.propTypes = {};

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
}));
