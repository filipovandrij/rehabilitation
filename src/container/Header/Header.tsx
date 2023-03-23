import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import './Header.scss'
import HealingIcon from '@mui/icons-material/Healing'
import Menu from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'

type Props = {
    changeToServices: (enterLink: string) => void
    favoriteCardNews: {
        [id: number]: number
    }
}
const Header = ({ changeToServices, favoriteCardNews }: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Link className="main-link" to="/">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <HealingIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Filipov Rehabilitation Center
                    </Typography>
                    <Menu
                        favoriteCardNews={favoriteCardNews}
                        changeToServices={changeToServices}
                    />
                </Toolbar>
            </Link>
        </AppBar>
    )
}
export default Header
