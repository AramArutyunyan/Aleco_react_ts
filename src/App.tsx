import React, { FC } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
const App: FC = () => {
  return(
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
