import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")
  const [news, setNews] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)

  // TO DO: Add pagination

  const apiQuery = async (input: string = "Headlines") => {
    try { 
        let response = await fetch(`https://content.guardianapis.com/search?order-by=newest&page=${page}&q=${input}%20AND%20NOT%20Football&api-key=${process.env.REACT_APP_API_KEY}`)  
        const newsResult = await response.json()
        setNews(newsResult.response.results)
        input.length === 0 ? setTitle("Headlines") : setTitle(input)
    } catch (err) {
      console.log(err)
    }
  }

  const retrieveHeadlines = async () => {
    try {
      let response = await fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${process.env.REACT_APP_API_KEY}`)
      const newsResponse = await response.json()
      console.log(newsResponse)
      setNews(newsResponse.response.results)
    } catch (err) {
      console.log(err)
    }
  }

  const selectSearch = async (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    await apiQuery(e.target.value)
  }

  useEffect(() => {
    retrieveHeadlines()
  }, [])

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch}/>
      <StoryList title={title} news={news} page={page} />
    </>
  );
}

export default App
