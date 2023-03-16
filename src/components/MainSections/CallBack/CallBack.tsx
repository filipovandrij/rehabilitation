import { Button, styled, TextField } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import './CallBack.scss'

type Props = {}
const CallBack = (props: Props) => {
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    })

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
                <CssTextField
                    className="call-back-text-field"
                    fullWidth
                    label="Ваше ім'я"
                    variant="outlined"
                />
                <CssTextField
                    fullWidth
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
