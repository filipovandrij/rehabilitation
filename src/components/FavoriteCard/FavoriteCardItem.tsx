import { Button } from '@mui/material'
import { useAppDispatch } from '../../redux/hooks'
import { removeLike } from '../../redux/likeReducer'
import './FavoriteCardItem.scss'

type Props = {
    id: number
    imgSrc: string
    title: string
    description: string
    likeCount: number
    watchCount: number
    removeProductToCart: (id: number, count: number) => void
}
const FavoriteCardItem = ({
    removeProductToCart,
    id,
    imgSrc,
    title,
    description,
}: Props) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="container-card" key={id}>
                <div>
                    <img src={imgSrc} alt="" className="picture" />
                </div>
                <div className="description-card">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="descripton-text">
                        <p>{description}</p>
                    </div>
                    <div className="unlike-btn">
                        <Button
                            variant="contained"
                            onClick={() => {
                                dispatch(removeLike(id))
                                removeProductToCart(id, 1)
                            }}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FavoriteCardItem
