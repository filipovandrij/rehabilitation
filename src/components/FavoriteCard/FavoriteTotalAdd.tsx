import { useAppDispatch, useAppSelector } from '../../redux/hooks'

type Props = {
    favoriteCardNews: {
        [id: number]: number
    }
}
const FavoriteTotalAdd = ({ favoriteCardNews }: Props) => {
    const dispatch = useAppDispatch()

    const info = useAppSelector((state) => state.productsLikeState)

    return (
        <div>
            {Object.keys(favoriteCardNews).reduce(
                (total, productId) =>
                    total + favoriteCardNews[parseInt(productId)],
                0
            )}
        </div>
    )
}
export default FavoriteTotalAdd
