import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import './Menu.scss'
import { Link } from 'react-router-dom'
import FavoriteTotalAdd from '../FavoriteCard/FavoriteTotalAdd'
import servicesCard from '../../utils/mocks/servicesCard.mock'

type Props = {
    changeToServices: (enterLink: string) => void
    cardsOfArticles: string
    favoriteCardNews: {
        [id: number]: number
    }
}
const Menu = ({
    cardsOfArticles,
    changeToServices,
    favoriteCardNews,
}: Props) => {
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
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <Link to="/comments">Histories of patients</Link>
                        </li>
                        <li>
                            <Link to="/price">Price</Link>
                        </li>
                    </ul>
                </div>
            </Button>

            <Button className="btn">
                Services
                <div className="dropdown_modal">
                    <ul>
                        {servicesCard.map(({ title }) => (
                            <li>
                                <Link
                                    to="/allServices"
                                    onClick={() => changeToServices(title)}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Button>

            <Button className="btn">Contact</Button>
            <Link className="favorite-page" to="/Favorite">
                <Button className="btn">
                    Favorite:{' '}
                    <FavoriteTotalAdd favoriteCardNews={favoriteCardNews} />
                </Button>
            </Link>
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
