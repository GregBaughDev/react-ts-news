import { useState, useEffect } from 'react'
import { H2 } from './styles'

const StoryList = ({title}: {title: string}) => {
    const [news, setNews] = useState([])

    const retrieveHeadlines = async () => {
        try {
            const response = await fetch(`https://content.guardianapis.com/search?order-by=newest&api-key=${process.env.REACT_APP_API_KEY}`)
            const newsResult = await response.json()
            setNews(newsResult)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        retrieveHeadlines()
    }, [])

    return(
        <>
            <H2>{title}</H2>
        </>
    )
}

export default StoryList