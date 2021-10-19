import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")

  const selectSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch} />
      <StoryList title={title} />
    </>
  );
}

export default App
