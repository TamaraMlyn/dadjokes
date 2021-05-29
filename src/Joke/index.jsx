import React from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  // const [likesUp, setLikesUp] = useState(0);
  // const [likesDown, setLikesDown] = useState(0);

  // const likeElm = document.querySelector('#likes-up');
  // const dislikeElm = document.querySelector('#likes-down');

  // const handleClickLikesUp = () => {
  //   setLikesUp(likesUp + 1);
  // };

  // const handleClickLikesDown = () => {
  //   setLikesDown(likesDown + 1);
  // };
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className={userName}>Neroxx</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>
          <button id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Joke;
