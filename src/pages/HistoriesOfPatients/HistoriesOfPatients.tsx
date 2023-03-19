import { Card, CardContent, Container, Typography } from '@mui/material'
import { useState } from 'react'
import HistoryForm from '../../components/HistoryForm/HistoryForm'
import arrReviews from '../../utils/mocks/arrReviews'

type Props = {}

const HistoriesOfPatients = (props: Props) => {
    const [reviews, setReviews] = useState(arrReviews)

    const [newReview, setNewReview] = useState({
        mail: '',
        name: '',
        text: '',
    })

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            mail: e.target.value,
        }))
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setNewReview({
                mail: '',
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <Container maxWidth="xl">
            <div>
                {reviews.map((item, i) => (
                    <Card
                        variant="outlined"
                        sx={{
                            background: '#13225c',
                            color: 'white',
                            margin: '20px 0',
                        }}
                        key={i}
                    >
                        <CardContent>
                            <div>
                                {item.mail}
                                <Typography>{item.name}:</Typography>
                            </div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}

                <HistoryForm
                    open={open}
                    onSend={onSend}
                    newReview={newReview}
                    handleMail={handleMail}
                    handleName={handleName}
                    handleText={handleText}
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                />
            </div>
        </Container>
    )
}
export default HistoriesOfPatients
