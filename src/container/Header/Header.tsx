import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import './Header.scss'
import HealingIcon from '@mui/icons-material/Healing'
import Menu from '../../components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <HealingIcon></HealingIcon>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Filipov Rehabilitation Clinic
                </Typography>
                <Menu></Menu>
            </Toolbar>
        </AppBar>
    )
}
export default Header
