import { Link, Card, CardContent, CardMedia, Typography } from '@mui/material'
import './AboutSetvices.scss'
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined'

type Props = {}
const AboutSetvices = (props: Props) => {
    return (
        <section className="section_about_services">
            <h3>
                <FormatIndentIncreaseOutlinedIcon
                    fontSize="large"
                    className="h3_icon"
                />
                SERVICES
            </h3>
            <div className="container_inner_row">
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_adult.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Реабілітація для дорослих
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_injection.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Лікувальні блокади
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_children.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Реабілітація для дітей
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_physioterapy.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Фізеотерапія
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_consultation.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Консультація лікарів
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 400, marginTop: 5 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/cart_diagnostic.png"
                        title="green iguana"
                    />
                    <CardContent className="cart_text_bg">
                        <Typography gutterBottom variant="h5" component="div">
                            Діагностика
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        фіафі
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default AboutSetvices
