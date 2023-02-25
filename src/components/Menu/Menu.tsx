import { Button, Link } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button className="btn">
                About clinic
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link underline="hover" color="inherit">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Histories of patients
                            </Link>
                        </li>
                    </ul>
                </div>
            </Button>
            <Button className="btn">
                Services
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link underline="hover" color="inherit">
                                Реабілітація для дорослих
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Лікувальні блокади
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Реабілітація для дітей
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Фізеотерапія
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Консультація лікарів
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Діагностика
                            </Link>
                        </li>
                    </ul>
                </div>
            </Button>
            <Button className="btn">
                Treatment
                <div className="dropdown_modal">
                    <ul>
                        <li>
                            <Link underline="hover" color="inherit">
                                Treatment of spine diseases
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Treatment of joint diseases
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Treatment of pain syndrome
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Children's rehabilitation
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
                                Prevention and recovery
                            </Link>
                        </li>
                        <li>
                            <Link underline="hover" color="inherit">
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
