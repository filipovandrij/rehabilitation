import { Button, TextField } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import './CallBack.scss'

type Props = {}
const CallBack = (props: Props) => {
    return (
        <section className="call_back">
            <hr />
            <h3>
                <PhoneIcon /> Callback
            </h3>
            <p>
                Selection of doctors for a complex individual recovery program
            </p>
            <form action="#" className="call-back-form">
                <TextField
                    className="text-field"
                    fullWidth
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    className="right text-field"
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                />
                <Button className="call-back-btn" variant="contained">
                    Leave a request
                </Button>
            </form>
            <hr />
        </section>
    )
}

export default CallBack
