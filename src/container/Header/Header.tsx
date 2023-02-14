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
                    Filipov Rehabilitation Center
                </Typography>
                <Menu></Menu>
            </Toolbar>
            <Typography>
                <div className="slide">
                    <div className="left_btn">⟨</div>
                    <div className="picture_slide">
                        <img src="" alt="" />
                    </div>
                    <div className="text_slide">
                        <p>
                            Work with terapists. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Delectus reiciendis
                            rem repellendus commodi totam voluptas eum est
                            dolores sint, libero odit, hic harum numquam, ipsam
                            quo! Dolor fugit animi quod?Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Delectus
                            reiciendis rem repellendus commodi totam voluptas
                            eum est dolores sint, libero odit, hic harum
                            numquam, ipsam quo! Dolor fugit animi quod?
                        </p>
                    </div>
                    <div className="right_btn">⟩</div>
                </div>
            </Typography>
        </AppBar>
    )
}
export default Header
