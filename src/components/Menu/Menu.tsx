import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button className="btn">About clinic</Button>
            <Button className="btn">Services</Button>
            <Button className="btn">Treatment</Button>
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
