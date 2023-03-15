import { Container } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'

type Props = {}
const Favorite = (props: Props) => {
    const selector = useAppSelector((state) => state.productsLikeState)

    console.log(selector)

    return (
        <>
            <Container>favourite</Container>
        </>
    )
}
export default Favorite
