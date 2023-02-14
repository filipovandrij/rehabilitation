import { Button } from '@mui/material'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button className="btn">News</Button>
            <Button className="btn">Home</Button>
            <Button className="btn">About us</Button>
            <Button className="btn">Treatment</Button>
            <Button className="btn">Info</Button>
            <Button className="btn">Contact</Button>
        </>
    )
}
export default Menu
