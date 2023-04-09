import { Container } from '@mui/material'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'
import Slider from '../../components/Slider/Slider'
import newsCardsArray from '../../utils/mocks/newsCards'

type Props = {
    removeProductToCart: (id: number, count: number) => void
}
const Favorite = ({ removeProductToCart }: Props) => {
    return (
        <Container>
            {newsCardsArray.map(
                ({ id, imgSrc, title, description, likeCount, watchCount }) => (
                    <FavoriteCard
                        removeProductToCart={removeProductToCart}
                        id={id}
                        imgSrc={imgSrc}
                        title={title}
                        description={description}
                        likeCount={likeCount}
                        watchCount={watchCount}
                    />
                )
            )}
            <Slider></Slider>
        </Container>
    )
}
export default Favorite
