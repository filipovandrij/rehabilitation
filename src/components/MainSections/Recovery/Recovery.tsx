import { Button } from '@mui/material'
import './Recovery.scss'

type Props = {}
const Recovery = (props: Props) => {
    return (
        <section className="section_recovery">
            <div className="recovery_bg">
                <span>Your well-being depends on your own decisions</span>
                <Button
                    className="moving_btn"
                    size="large"
                    variant="contained"
                    sx={{ marginTop: 3 }}
                >
                    Start recovery
                </Button>
            </div>
        </section>
    )
}
export default Recovery
