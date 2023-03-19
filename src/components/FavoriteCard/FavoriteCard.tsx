import { useAppSelector } from '../../redux/hooks'
import NewsCard from '../NewsCard/NewsCard'

type Props = {
    id: number
    imgSrc: string
    title: string
    description: string
    likeCount: number
    watchCount: number
}
const FavoriteCard = ({
    id,
    imgSrc,
    title,
    description,
    likeCount,
    watchCount,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    console.log(isLiked)
    if (isLiked) {
        return (
            <NewsCard
                id={id}
                imgSrc={imgSrc}
                title={title}
                description={description}
                likeCount={likeCount}
                watchCount={watchCount}
            />
        )
    } else {
        return null
    }
}
export default FavoriteCard
