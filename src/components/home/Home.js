import React, { useState } from 'react';
import AddComment from '../addComment/AddComment';
const Home = () => {
  const [commentBox, setCommentBox] = useState(false);
  const getCommentBox = () => {
    setCommentBox(true);
  };
  if (commentBox) {
    return (
      <div>
        <AddComment setCommentBox={setCommentBox} />
      </div>
    );
  } else {
    return (
      <div>
        <span onClick={getCommentBox}>Comment</span>
      </div>
    );
  }
};
export default Home;
