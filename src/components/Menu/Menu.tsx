import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import './Menu.scss'
import { Link } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button className="btn">
                About clinic
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li>
                            <Link to="/">News</Link>
                        </li>
                        <li>
                            <Link to="/">Histories of patients</Link>
                        </li>
                    </ul>
                </div>
            </Button>
            <Button className="btn">
                Services
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link to="/">Реабілітація для дорослих</Link>
                        </li>
                        <li>
                            <Link to="/">Лікувальні блокади</Link>
                        </li>
                        <li>
                            <Link to="/">Реабілітація для дітей</Link>
                        </li>
                        <li>
                            <Link to="/">Фізеотерапія</Link>
                        </li>
                        <li>
                            <Link to="/">Консультація лікарів</Link>
                        </li>
                        <li>
                            <Link to="/">Діагностика</Link>
                        </li>
                    </ul>
                </div>
            </Button>
            <Button className="btn">
                Treatment
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link to="/">Treatment of spine diseases</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of joint diseases</Link>
                        </li>
                        <li>
                            <Link to="/">Treatment of pain syndrome</Link>
                        </li>
                        <li>
                            <Link to="/">Children's rehabilitation</Link>
                        </li>
                        <li>
                            <Link to="/">Prevention and recovery</Link>
                        </li>
                        <li>
                            <Link to="/">
                                Treatment of diseases of the muscular system
                            </Link>
                        </li>
                    </ul>
                </div>
            </Button>
            <Button className="btn">Price</Button>
            <Button className="btn">Our Team</Button>
            <Button className="btn">Contact</Button>
            <Button
                className="btn_сonsultation"
                variant="contained"
                endIcon={<AppRegistrationIcon />}
            >
                Consultation
            </Button>
        </>
    )
}
export default Menu
