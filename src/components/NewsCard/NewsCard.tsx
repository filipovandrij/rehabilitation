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
import { useState } from 'react'

type Props = {
    id: number
    imgSrc: string
    title: string
    description: string
    likeCount: number
    watchCount: number
    removeProductToCart: (id: number, count: number) => void
    addProductToCart: (id: number, count: number) => void
}

const NewsCard = ({
    removeProductToCart,
    addProductToCart,
    id,
    imgSrc,
    title,
    description,
    likeCount,
    watchCount,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()

    const [likesCounter, setLikesCounter] = useState<number>(likeCount)

    const addNumberCount = (likesCounter: number) => {
        setLikesCounter((prevState) => prevState + 1)
    }

    const removeNumberCount = (likesCounter: number) => {
        setLikesCounter((prevState) => prevState - 1)
    }

    return (
        <div className="container">
            <Container className="row-container">
                <Card className="news-card">
                    <CardMedia
                        className="title-img"
                        component="img"
                        src={imgSrc}
                    ></CardMedia>
                    <CardContent className="title" component="h2">
                        {title}
                    </CardContent>
                    <CardContent component="article">{description}</CardContent>
                    <div className="like-box">
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => {
                                if (isLiked) {
                                    dispatch(removeLike(id))
                                    removeNumberCount(1)
                                    removeProductToCart(id, 1)
                                } else {
                                    dispatch(addLike(id))
                                    addNumberCount(1)
                                    addProductToCart(id, 1)
                                }
                            }}
                        >
                            {isLiked ? (
                                <FavoriteIcon color="primary" />
                            ) : (
                                <FavoriteBorderIcon color="primary" />
                            )}
                        </IconButton>
                        {likesCounter}
                        <RemoveRedEyeIcon
                            className="eye-count"
                            color="primary"
                        />
                        {watchCount}
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default NewsCard
