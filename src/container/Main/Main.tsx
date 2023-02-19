import { Button, Container, StyledEngineProvider } from '@mui/material'
import ReactPlayer from 'react-player'
import Slider from '../../components/Slider/Slider'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <main>
                <Slider></Slider>
                <Container maxWidth="xl">
                    <section className="section_about_clinic">
                        <div className="container_about">
                            <h3 className="first">CLINIC</h3>
                            <p>вислів</p>
                            <article>
                                Трохи тексту в очі Трохи тексту в очіТрохи
                                тексту в очі Трохи тексту в очі Трохи тексту в
                                очі Трохи тексту в очі Трохи тексту в очі Трохи
                                тексту в очі Трохи тексту в очі{' '}
                            </article>
                            <p>Мета - яка мета</p>
                            <Button variant="contained">
                                Дізнатись трохи більше
                            </Button>
                        </div>
                        <div className="about_video">
                            {' '}
                            <ReactPlayer
                                className="content_video"
                                url="https://www.youtube.com/embed/4Sxybl1VaRY"
                                title="YouTube video player"
                            ></ReactPlayer>{' '}
                        </div>
                    </section>
                    <section className="section_about_services"></section>
                    <section className="section_about_treatment"></section>
                </Container>
            </main>
        </StyledEngineProvider>
    )
}
export default Main
