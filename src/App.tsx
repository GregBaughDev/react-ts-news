import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")
  const [news, setNews] = useState<any[]>([])

  // TO DO: Add pagination

  useEffect(() => {
      apiQuery(title)
  }, [])

  const apiQuery = async (input: string) => {
    let response: any
    try {
      if(news.length === 0 || input === "Headlines"){
        response = await fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${process.env.REACT_APP_API_KEY}`)
      } else {  
        response = await fetch(`https://content.guardianapis.com/search?order-by=newest&q=${input}%20AND%20NOT%20Football&api-key=${process.env.REACT_APP_API_KEY}`)
      }
      const newsResult = await response.json()
      setNews(newsResult.response.results)
      input.length === 0 ? setTitle("Headlines") : setTitle(input)
    } catch (err) {
      console.log(err)
    }
  }

  const selectSearch = async (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    await apiQuery(e.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch}/>
      <StoryList title={title} news={news} />
    </>
  );
}

export default App
