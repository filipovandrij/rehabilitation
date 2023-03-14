import { Button } from '@mui/material'
import './Moving.scss'

type Props = {}
const Moving = (props: Props) => {
    return (
        <section className="section_moving">
            <div className="moving_bg">
                <span>
                    Desires are necessary for life to be constantly in motion.
                </span>
                <Button
                    className="moving_btn"
                    size="large"
                    variant="contained"
                    sx={{ marginTop: 3 }}
                >
                    Start moving
                </Button>
            </div>
        </section>
    )
}
export default Moving
