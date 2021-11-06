import React from 'react';

const AddComment = (props) => {
  const closeCommentBox=()=>{
    props.setCommentBox(false);
  }
  return (
    <div>
      <input placeholder='write your comment' type='text'  />
      <span onClick={closeCommentBox}>Post Comment</span>
    </div>
  );
};
export default AddComment;
