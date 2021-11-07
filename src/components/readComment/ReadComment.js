import React, { useState, useEffect } from 'react';
import { UserData } from '../../constants/data/Data';
import axios from 'axios';
import { Url } from '../../constants/Api';
import UpdateComment from '../updateComment/UpdateComment';
import './ReadComment.css';
const ReadComment = () => {
  const [apiData, setApiData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(async () => {
    await axios.get(Url).then((response) => {
      setApiData(response.data);
    });
  }, []);
  const setId = (id, comment) => {
    setUpdate(true);
    console.log(id, 'ID');
    localStorage.setItem('ID', id);
    localStorage.setItem('Comment', comment);
  };
  const getNewData = () => {
    axios.get(Url).then((response) => {
      setApiData(response.data);
    });
  };
  const deleteID = (id) => {
    axios.delete(`${Url}/${id}`).then(() => {
      getNewData();
    });
  };

  if (update) {
    return (
      <div className='read_main_div'>
        <div>
          {' '}
          <img className='user-image' src={UserData.img} alt='image' />
        </div>
        <div className='name_comment_box'>
          {' '}
          <span className='user_name'>{UserData.name}</span>
          <span className='update_outer_span'>
            <UpdateComment setUpdate={setUpdate} />
          </span>
        </div>
      </div>
    );
  } else {
    return apiData.map((cval) => {
      return (
        <div className='read_main_div'>
          <img className='user-image' src={UserData.img} alt='image' />
          <div className='name_comment_box'>
            <span className='user_name'>{UserData.name}</span>
            <span className='update_outer_span'>{cval.comment}</span>
            <span className='rd_button_div'>
              <span
                className='ud_button'
                onClick={() => {
                  setId(cval.id, cval.comment);
                }}
              >
                Update
              </span>
              <span
                className='ud_button'
                onClick={() => {
                  deleteID(cval.id);
                }}
              >
                Delete
              </span>
            </span>
          </div>
        </div>
      );
    });
  }
};
export default ReadComment;
