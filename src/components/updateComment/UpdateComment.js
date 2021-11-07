import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Url } from '../../constants/Api';
import './UpdateComment.css';

const UpdateComment = (props) => {
  const [comment, setComment] = useState('');
  const [ID, setID] = useState(null);

  useEffect(() => {
    setComment(localStorage.getItem('Comment'));
    setID(localStorage.getItem('ID'));
  }, []);
  const upDateComment = () => {
    console.log(comment);
    axios.put(`${Url}/${ID}`, { comment });

    props.setUpdate(false);
  };

  return (
    <div className='update_main_div'>
      <input
        name='comm'
        type='text'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <span className='add_button' onClick={upDateComment}>
        Update Comment
      </span>
    </div>
  );
};
export default UpdateComment;
