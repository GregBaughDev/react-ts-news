import React, { useState, useEffect, useRef } from 'react';
import { GlobalStyle } from './styles';
import SearchHolderComp from './components/SearchHolder/index'
import StoryList from './components/StoryList';
import './styles.css'

function App() {
  const [title, setTitle] = useState<string>("Headlines")
  const [news, setNews] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const searchInput = useRef<HTMLInputElement>(null)

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
    if(e.nativeEvent.type === "change"){
      if(searchInput.current?.value){
        searchInput.current.value = ''
      }
    }
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

  return (
    <>
      <GlobalStyle />
      <h1>News App</h1>
      <SearchHolderComp selectSearch={selectSearch} searchInput={searchInput} />
      <StoryList title={title} news={news} page={page} updatePageCount={updatePageCount} />
    </>
  );
}

export default App
