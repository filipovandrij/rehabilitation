import { Container } from '@mui/material'
import NewsCard from '../../components/NewsCard/NewsCard'
import newsCardsArray from '../../utils/mocks/newsCards'
import './News.scss'
type Props = {}
const News = (props: Props) => {
    return (
        <>
            <Container className="row-container">
                {newsCardsArray.map(
                    ({
                        id,
                        imgSrc,
                        title,
                        description,
                        likeCount,
                        watchCount,
                    }) => (
                        <NewsCard
                            id={id}
                            imgSrc={imgSrc}
                            title={title}
                            description={description}
                            likeCount={likeCount}
                            watchCount={watchCount}
                        />
                    )
                )}
            </Container>
        </>
    )
}
export default News
