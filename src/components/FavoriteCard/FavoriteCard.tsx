import { useAppSelector } from '../../redux/hooks'
import FavoriteCardItem from './FavoriteCardItem'

type Props = {
    id: number
    imgSrc: string
    title: string
    description: string
    likeCount: number
    watchCount: number
    removeProductToCart: (id: number, count: number) => void
}
const FavoriteCard = ({
    removeProductToCart,
    id,
    imgSrc,
    title,
    description,
    likeCount,
    watchCount,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    if (isLiked) {
        return (
            <FavoriteCardItem
                removeProductToCart={removeProductToCart}
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
