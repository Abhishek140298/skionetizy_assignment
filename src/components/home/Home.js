import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Url } from '../../constants/Api';
import AddComment from '../addComment/AddComment';
import ReadComment from '../readComment/ReadComment';
import './Home.css';
const Home = () => {
  const [commentBox, setCommentBox] = useState(false);
  const [numberOfComment, setNumberOfComment] = useState();
  useEffect(async () => {
    await axios.get(Url).then((response) => {
      setNumberOfComment(response.data.length);
    });
  }, []);

  const getCommentBox = () => {
    setCommentBox(true);
  };
  if (commentBox) {
    return (
      <div className='main_div'>
        <AddComment setCommentBox={setCommentBox} />
        <div className='r_div'>
          <h3> {numberOfComment} comments</h3>
          <ReadComment />
        </div>
      </div>
    );
  } else {
    return (
      <div className='main_div'>
        <span className='comment_button' onClick={getCommentBox}>
          Comment
        </span>
        <div className='r_div'>
          <h3>{numberOfComment} comments </h3>
          <ReadComment />
        </div>
      </div>
    );
  }
};
export default Home;
