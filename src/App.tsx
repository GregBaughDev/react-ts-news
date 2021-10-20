import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")
  const [news, setNews] = useState<any[]>([])

    const retrieveHeadlines = async () => {
        try {
            const response = await fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${process.env.REACT_APP_API_KEY}`)
            const newsResult = await response.json()
            setNews(newsResult.response.results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        retrieveHeadlines()
    }, [])

  const selectSearch = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const response = await fetch(`https://content.guardianapis.com/search?order-by=newest&q=${e.target.value}%20AND%20NOT%20Football&api-key=${process.env.REACT_APP_API_KEY}`)
      const newsResult = await response.json()
      setNews(newsResult.response.results)
      setTitle(e.target.value)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch} />
      <StoryList title={title} news={news} />
    </>
  );
}

export default App
