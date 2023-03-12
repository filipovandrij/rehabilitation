import {
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import './NewsCard.scss'
import newsCardsArray from '../../utils/mocks/newsCards'
import { useState } from 'react'

type Props = {}

type LikeColor = 'grey' | 'red'
const NewsCard = (props: Props) => {
    const [colorLike, setColorLike] = useState<LikeColor>('grey')

    const isLiked = () => {
        if (colorLike === 'grey') {
            setColorLike('red')
        } else {
            setColorLike('grey')
        }
    }

    return (
        <div className="container">
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
                        <Card className="news-card" key={id}>
                            <CardMedia component="img" src={imgSrc}></CardMedia>
                            <CardContent component="h3">{title}</CardContent>
                            <CardContent component="article">
                                {description}
                            </CardContent>
                            <div className="like-box">
                                <IconButton
                                    onClick={isLiked}
                                    sx={{
                                        color: colorLike,
                                    }}
                                    aria-label="add to favorites"
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                {likeCount}
                                <RemoveRedEyeIcon className="eye-count" />
                                {watchCount}
                            </div>
                        </Card>
                    )
                )}
            </Container>
        </div>
    )
}
export default NewsCard
