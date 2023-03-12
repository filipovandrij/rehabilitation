import { Card, CardContent, Grid, Typography } from '@mui/material'
import BoyIcon from '@mui/icons-material/Boy'
import cardsArray from '../../utils/mocks/cardAboutUs'

type Props = {}
const infoCards = (props: Props) => {
    return (
        <div>
            <Grid container spacing={3}>
                {cardsArray.map(({ id, title, description }) => (
                    <Card
                        key={id}
                        sx={{ maxWidth: 400, margin: 5 }}
                        className="row-container"
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <BoyIcon fontSize="large" />
                                {title}
                            </Typography>
                            <Typography
                                sx={{
                                    paddingTop: 2,
                                    margin: 2,
                                }}
                                variant="body2"
                            >
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </div>
    )
}
export default infoCards
