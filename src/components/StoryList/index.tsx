import { H2 } from './styles'

interface Props {
    title: string
}

const StoryList: React.FC<Props> = ({title}) => {
    return(
        <H2>{title}</H2>
    )
}

export default StoryList