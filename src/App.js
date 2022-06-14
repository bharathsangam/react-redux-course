import React from 'react';
import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/postsList';
import Theme from './features/theme/Theme';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Coin/>
      <Theme/>
      <PostsList/>
    </div>
  );
}

export default App;
