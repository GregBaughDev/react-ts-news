import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';

function App() {
  const [title, setTitle] = useState<string>("Headlines")
  const [news, setNews] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)

  // TO DO: BUG - Pagination is sticking until page 3, clear search box when select changes

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
      setNews(newsResponse.response.results)
    } catch (err) {
      console.log(err)
    }
  }

  const selectSearch = async (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    await apiQuery(e.target.value)
  }

  useEffect(() => {
    retrieveHeadlines()
  }, [])

  const updatePageCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = e.target as HTMLElement
    input.innerText === "Next" ? setPage(page => page += 1) : setPage(page => page -= 1)
    apiQuery(title)
  }

  console.log(page)

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch}/>
      <StoryList title={title} news={news} page={page} updatePageCount={updatePageCount} />
    </>
  );
}

export default App
