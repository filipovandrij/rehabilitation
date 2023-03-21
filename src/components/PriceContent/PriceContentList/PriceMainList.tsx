import { Button } from '@mui/material'
import { Container } from '@mui/system'
import AboutSetvices from '../../MainSections/AboutSetvices/AboutSetvices'
import './PriceMainList.scss'

type Props = {
    changeToArtrouse: (enterLink: string) => void
    clickConsultationBtn: (changeConsultationBtn: boolean) => void
    clickRehubBtn: (changeRehubBtn: boolean) => void
    clickChildrenBtn: (changeChildrenBtn: boolean) => void
    clickPhysiotherapyBtn: (changePhysiotherapyBtn: boolean) => void
    changePhysiotherapyBtn?: boolean
    changeChildrenBtn?: boolean
    changeRehubBtn?: boolean
    changeConsultationBtn?: boolean
}
const PriceMainList = ({
    changeToArtrouse,
    changeRehubBtn,
    changePhysiotherapyBtn,
    changeChildrenBtn,
    changeConsultationBtn,
    clickConsultationBtn,
    clickRehubBtn,
    clickChildrenBtn,
    clickPhysiotherapyBtn,
}: Props) => {
    return (
        <Container maxWidth="xl">
            <AboutSetvices changeToArtrouse={changeToArtrouse} />
            <h3>PRICES FOR SERVICES</h3>
            <section className="show-price-container">
                <Button
                    variant="contained"
                    onClick={() => clickConsultationBtn(false)}
                >
                    {changeConsultationBtn ? 'HIDE' : 'SHOW CONSULTATION'}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => clickRehubBtn(false)}
                >
                    {changeRehubBtn ? 'HiDE' : 'SHOW REHUB'}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => clickChildrenBtn(false)}
                >
                    {changeChildrenBtn ? 'HiDE' : 'SHOW Child REhub'}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => clickPhysiotherapyBtn(false)}
                >
                    {changePhysiotherapyBtn ? 'HiDE' : 'SHOW Physioterapy'}
                </Button>
            </section>
        </Container>
    )
}
export default PriceMainList
