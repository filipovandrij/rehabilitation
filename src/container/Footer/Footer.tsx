import {
    Button,
    Container,
    IconButton,
    Link,
    TextField,
    Typography,
} from '@mui/material'
import HealingIcon from '@mui/icons-material/Healing'
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer>
            <Container maxWidth="xl">
                <hr />
                <div className="container">
                    <div className="container_box_one">
                        <div className="logo">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <HealingIcon></HealingIcon>
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Filipov Rehabilitation Center
                            </Typography>
                        </div>
                        <p>
                            Our specialists will always help you in solving
                            problems, select an individual treatment plan that
                            will allow you to achieve the desired result as
                            efficiently and quickly as possible.
                        </p>
                        <div>
                            <Link href="#">Comilla, Bangladesh 3500</Link>
                        </div>
                        <div>
                            <Link className="mail" href="@">
                                kawsarahmed0210@gmail.com
                            </Link>
                        </div>
                        <div>
                            <Link href="#">+39505845645</Link>
                        </div>
                    </div>
                    <div className="container_box_two">
                        <div className="email_btn">
                            <h2>RECIVE EMAIL UPDATES</h2>

                            <TextField
                                className="text-field"
                                fullWidth
                                id="outlined-basic"
                                label="Your Email Address"
                                variant="outlined"
                            ></TextField>
                            <Button
                                sx={{ marginTop: 2 }}
                                size="large"
                                fullWidth
                                variant="contained"
                            >
                                join
                            </Button>
                        </div>
                        <div className="support">
                            <div>
                                <h3>Price</h3>
                                <p>Training</p>
                                <p>Blockade</p>
                                <p>Infusion</p>
                                <p>Full inspection</p>
                            </div>
                            <div>
                                <h3>HELP</h3>
                                <p>FAQ</p>
                                <p>Privecy Policy</p>
                                <p>Tearms and conditions</p>
                                <p>Return and Exchanges</p>
                            </div>
                            <div>
                                <h3>About clinic</h3>
                                <p>News</p>
                                <p>Our Story</p>
                                <p>Contact</p>
                            </div>
                            <div>
                                <h3>Our Team</h3>
                                <p>Doctors</p>
                                <p>Professors</p>
                                <p>Physiotherapists</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer
