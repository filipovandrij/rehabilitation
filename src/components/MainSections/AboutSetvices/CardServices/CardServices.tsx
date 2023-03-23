import { Card, CardContent, CardMedia, Typography } from '@mui/material'
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
                    <Card
                        key={id}
                        sx={{ height: 'auto', width: 400, marginTop: 5 }}
                    >
                        <CardMedia
                            className="title-img"
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
                            <Typography
                                sx={{ height: 250 }}
                                variant="body2"
                                color="text.secondary"
                            >
                                <ul className="list-nav-link">
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
                                        <NavLink
                                            to="/article"
                                            onClick={() =>
                                                changeToArtrouse(link3)
                                            }
                                        >
                                            {link3}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/article"
                                            onClick={() =>
                                                changeToArtrouse(link4)
                                            }
                                        >
                                            {link4}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/article"
                                            onClick={() =>
                                                changeToArtrouse(link5)
                                            }
                                        >
                                            {link5}
                                        </NavLink>
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
