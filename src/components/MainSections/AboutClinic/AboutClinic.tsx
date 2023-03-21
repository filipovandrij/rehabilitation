import { Button } from '@mui/material'
import ReactPlayer from 'react-player'
import './AboutClinic.scss'

type Props = {}
const AboutClinic = (props: Props) => {
    return (
        <section className="section_about_clinic">
            <div className="container_about">
                <h3 className="first"> ABOUT CLINIC</h3>
                <p>FRC - TIME TO LIVE WITHOUT PAIN!</p>
                <article>
                    FRC - this is a center that combines minimally invasive
                    surgical treatment of pain syndromes with modern methods of
                    rehabilitation and physiotherapy
                </article>
                <p>Our goal is to return to an active life without pain!</p>
                <Button variant="contained">Дізнатись трохи більше</Button>
            </div>
            <div className="about_video">
                <ReactPlayer
                    className="content_video"
                    url="https://www.youtube.com/embed/4Sxybl1VaRY"
                    title="YouTube video player"
                />
            </div>
        </section>
    )
}
export default AboutClinic
