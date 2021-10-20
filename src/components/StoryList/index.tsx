import { H2, H3, A, Section } from './styles'

const StoryList = ({title, news}: {title: string, news: any[]}) => {
    return(
        <>
            <H2>{title}</H2>
            {news.map((story, idx) => (
                <Section key={idx}>
                    <H3><A rel="noreferrer" target="_blank" href={story.webUrl}>{story.webTitle.substr(0, 120)}...</A></H3>
                </Section>
            ))}
        </>
    )
}

export default StoryList