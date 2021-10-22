import { H2, H3, A, Section, Pagination, Button } from './styles'

const StoryList = ({title, news, page}: {title: string, news: any[], page: number}) => {
    return(
        <>
            <H2>{title}</H2>
            {title !== "Headlines" &&
                <Pagination>
                    <Button disabled={page === 1 ? true : false}>Previous</Button>
                    <Button>Next</Button>
                </Pagination>}
            {news.map((story, idx) => (
                <Section key={idx}>
                    <H3><A rel="noreferrer" target="_blank" href={story.webUrl}>{story.webTitle}</A></H3>
                </Section>
            ))}
        </>
    )
}

export default StoryList