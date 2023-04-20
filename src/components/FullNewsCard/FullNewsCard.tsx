import { Container } from '@mui/material'
import newsCardsArray from '../../utils/mocks/newsCards'
import './FullNewsCard.scss'

type Props = {
    newsCardId: number | undefined
}
const FullNewsCard = ({ newsCardId }: Props) => {
    return (
        <div>
            {newsCardsArray.map(
                ({ id, imgSrc, title, description, likeCount, watchCount }) =>
                    newsCardId === id ? (
                        <Container maxWidth="xl" key={id}>
                            <h3 className="title-full">{title}</h3>
                            <img className="full-img" src={imgSrc} alt="" />
                            <p className="description-full">{description}</p>
                        </Container>
                    ) : undefined
            )}
        </div>
    )
}
export default FullNewsCard
