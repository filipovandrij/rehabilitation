import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import servicesCard from '../../../../utils/mocks/servicesCard.mock'

type Props = {
    changeToArtrouse: (enterLink: string) => void
}
const CardServices = ({ changeToArtrouse }: Props) => {
    return (
        <>
            {servicesCard.map(
                ({ id, imgSrc, title, link1, link2, link3, link4, link5 }) => (
                    <Card key={id} sx={{ minWidth: 400, marginTop: 5 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={imgSrc}
                            title="green iguana"
                        />
                        <CardContent className="cart_text_bg">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <ul>
                                    <li>
                                        <NavLink
                                            onClick={() =>
                                                changeToArtrouse(link1)
                                            }
                                            to="/article"
                                        >
                                            {link1}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/article"
                                            onClick={() =>
                                                changeToArtrouse(link2)
                                            }
                                        >
                                            {link2}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link3}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link4}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" underline="always">
                                            {link5}
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            )}
        </>
    )
}
export default CardServices
