import { Button, TextField } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import './CallBack.scss'

type Props = {}
const CallBack = (props: Props) => {
    return (
        <section className="call_back">
            <hr />
            <h3>
                <PhoneIcon /> Зворотній зв'зок
            </h3>
            <p>
                Підбір лікарями комплексної індивідуальної програми відновлення
            </p>
            <form action="#" className="call-back-form">
                <TextField
                    className="call-back-text-field"
                    fullWidth
                    id="outlined-basic"
                    label="Ваше ім'я"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Номер телефону"
                    variant="outlined"
                />
                <Button className="call-back-btn" variant="contained">
                    Залишити заявку
                </Button>
            </form>
            <hr />
        </section>
    )
}

export default CallBack
