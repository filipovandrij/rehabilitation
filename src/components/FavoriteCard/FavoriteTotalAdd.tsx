type Props = {
    favoriteCardNews: {
        [id: number]: number
    }
}
const FavoriteTotalAdd = ({ favoriteCardNews }: Props) => {
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
