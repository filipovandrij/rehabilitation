import {
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
} from '@mui/material'
import './News.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

type Props = {}
const News = (props: Props) => {
    return (
        <main>
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
        </main>
    )
}
export default News
