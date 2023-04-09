import { Container } from '@mui/material'
import NewsCard from '../../components/NewsCard/NewsCard'
import newsCardsArray from '../../utils/mocks/newsCards'
import './News.scss'
import { useEffect } from 'react'
type Props = {
    addProductToCart: (id: number, count: number) => void
    removeProductToCart: (id: number, count: number) => void
}
const News = ({ removeProductToCart, addProductToCart }: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                            removeProductToCart={removeProductToCart}
                            addProductToCart={addProductToCart}
                            key={id}
                            id={id}
                            imgSrc={imgSrc}
                            title={title}
                            description={description}
                            likeCount={likeCount}
                            watchCount={watchCount}
                        ></NewsCard>
                    )
                )}
            </Container>
        </>
    )
}
export default News
