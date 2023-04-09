import { Container } from '@mui/material'
import Slider from '../../components/Slider/Slider'
import AboutClinic from '../../components/MainSections/AboutClinic/AboutClinic'
import CallBack from '../../components/MainSections/CallBack/CallBack'
import AboutSetvices from '../../components/MainSections/AboutSetvices/AboutSetvices'
import Moving from '../../components/MainSections/Moving/Moving'
import AboutTreatment from '../../components/MainSections/AboutTreatment/AboutTreatment'
import Recovery from '../../components/MainSections/Recovery/Recovery'
import './Main.scss'
type Props = {
    changeToArtrouse: (enterLink: string) => void
    cardsOfArticles: string
}

const Main = ({ cardsOfArticles, changeToArtrouse }: Props) => {
    return (
        <>
            <main>
                <Slider />
                <AboutClinic />

                <Container maxWidth="xl">
                    <CallBack />
                    <AboutSetvices
                        cardsOfArticles={cardsOfArticles}
                        changeToArtrouse={changeToArtrouse}
                    />
                </Container>
                <Moving />
                <Container maxWidth="xl">
                    <AboutTreatment />
                </Container>
                <Recovery />
            </main>
        </>
    )
}
export default Main
