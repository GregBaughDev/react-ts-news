import { useState } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp />
      <StoryList title={title} />
    </>
  );
}

export default App;
