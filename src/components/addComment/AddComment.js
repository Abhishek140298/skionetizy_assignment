import React, { useState } from 'react';
import { Url } from '../../constants/Api';
import axios from 'axios';
import './AddComment.css';

const AddComment = (props) => {
  const [comment, setComment] = useState();
  const getComment = (e) => {
    setComment(e.target.value);
  };
  const closeCommentBox = () => {
    props.setCommentBox(false);
    axios.post(Url, { comment });
  };
  console.log('comment', comment);
  return (
    <div className='add_main_div'>
      <input
        placeholder='write your comment'
        type='text'
        onChange={getComment}
      />
      <span className='add_button' onClick={closeCommentBox}>
        Post Comment
      </span>
    </div>
  );
};
export default AddComment;
