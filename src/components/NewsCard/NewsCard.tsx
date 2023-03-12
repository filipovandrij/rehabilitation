import {
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import './NewsCard.scss'

type Props = {}
const NewsCard = (props: Props) => {
    return (
        <div className="container">
            <Container>
                <Card>
                    <CardMedia>
                        <div>картинка</div>
                    </CardMedia>
                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod eligendi aliquam vel repellat ipsam
                        reprehenderit quis, nesciunt ab provident autem est
                        eaque libero adipisci quisquam illum natus! Libero,
                        molestias nesciunt!
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Card>
            </Container>
        </div>
    )
}
export default NewsCard
