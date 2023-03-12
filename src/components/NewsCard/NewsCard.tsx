import {
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import './NewsCard.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addLike, removeLike } from '../../redux/likeReducer'

type Props = {
    id: number
    imgSrc: string
    title: string
    description: string
    likeCount: number
    watchCount: number
}

const NewsCard = ({
    id,
    imgSrc,
    title,
    description,
    likeCount,
    watchCount,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    console.log(isLiked)

    const dispatch = useAppDispatch()

    return (
        <div className="container">
            <Container className="row-container">
                <Card className="news-card">
                    <CardMedia component="img" src={imgSrc}></CardMedia>
                    <CardContent component="h3">{title}</CardContent>
                    <CardContent component="article">{description}</CardContent>
                    <div className="like-box">
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => {
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                            }}
                        >
                            {isLiked ? (
                                <FavoriteIcon color="primary" />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </IconButton>
                        {likeCount}
                        <RemoveRedEyeIcon className="eye-count" />
                        {watchCount}
                    </div>
                </Card>
            </Container>
        </div>
    )
}
export default NewsCard
