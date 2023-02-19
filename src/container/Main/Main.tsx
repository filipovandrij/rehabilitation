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

                <section className="section_about_clinic">
                    <div className="container_about">
                        <h3 className="first">CLINIC</h3>
                        <p>вислів</p>
                        <article>
                            ARTICLE Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Est illum deleniti qui nisi, vel
                            ea dolore minus assumenda. Odit perferendis
                            consectetur itaque repellendus rem corrupti laborum
                            exercitationem provident. Sunt, dolor.
                        </article>
                        <p>Мета - яка мета</p>
                        <Button variant="contained">
                            Дізнатись трохи більше
                        </Button>
                    </div>
                    <div className="about_video">
                        <ReactPlayer
                            className="content_video"
                            url="https://www.youtube.com/embed/4Sxybl1VaRY"
                            title="YouTube video player"
                        ></ReactPlayer>
                    </div>
                </section>
                <Container maxWidth="xl">
                    <section className="section_about_services"></section>
                    <section className="section_about_treatment"></section>
                </Container>
            </main>
        </StyledEngineProvider>
    )
}
export default Main
