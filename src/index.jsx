import React, { useState } from 'react';
import { render } from 'react-dom';
import Joke from './Joke';
import { jokes } from '../jokes';
import './style.css';

const App = () => {
  return jokes.map((joke) => (
    <Joke
      userAvatar={joke.avatar}
      userName={joke.name}
      text={joke.text}
      likes={joke.likes}
      dislikes={joke.dislikes}
      key={joke.id}
    />
  ));
};

render(<App />, document.querySelector('#app'));
