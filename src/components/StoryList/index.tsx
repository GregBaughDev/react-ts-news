import React from 'react'
import { H2, H3, A, Section, Pagination, Button } from './styles'

const StoryList = ({title, news, page, updatePageCount}: 
    {title: string, 
    news: any[], 
    page: number, 
    updatePageCount(e: React.MouseEvent<HTMLButtonElement>) :void}) => {
    return(
        <>
            <H2>{title}</H2>
            {title !== "Headlines" &&
                <>
                    <H3 className="page-dsp">Page {page}</H3>
                    <Pagination>
                        <Button onClick={updatePageCount} disabled={page === 1 ? true : false}>Previous</Button>
                        <Button onClick={updatePageCount}>Next</Button>
                    </Pagination>
                </>}
            {news.map((story, idx) => (
                <Section key={idx}>
                    <H3><A rel="noreferrer" target="_blank" href={story.webUrl}>{story.webTitle}</A></H3>
                </Section>
            ))}
        </>
    )
}

export default StoryList