import { Button, Dialog, TextareaAutosize, TextField } from '@mui/material'

import './HistoryForm.scss'

type Props = {
    onSend: (e: React.FormEvent<HTMLFormElement>) => void
    handleMail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleClose: () => void
    handleClickOpen: () => void
    open: boolean
    newReview: {
        mail: string
        name: string
        text: string
    }
}
const HistoryForm = ({
    onSend,
    handleClickOpen,
    handleMail,
    handleName,
    handleClose,
    handleText,
    newReview,
    open,
}: Props) => {
    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Open form
            </Button>
            <Dialog className="modal" open={open}>
                <form onSubmit={onSend}>
                    <div className="comment-container">
                        <h3>Please leave a history</h3>
                        <div className="row">
                            <TextField
                                className="test your-name"
                                fullWidth
                                value={newReview.name}
                                onChange={handleName}
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                className="test your-mail"
                                fullWidth
                                value={newReview.mail}
                                onChange={handleMail}
                                label="@mail"
                                variant="outlined"
                            />
                        </div>
                        <TextareaAutosize
                            className="text-area"
                            minRows={10}
                            value={newReview.text}
                            onChange={handleText}
                            placeholder="Your history"
                        />
                        <Button variant="contained" type="submit">
                            Send
                        </Button>
                        <Button
                            variant="contained"
                            className="close-btn"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Dialog>
        </>
    )
}
export default HistoryForm
