import { Button } from '@mui/material'
import ReactPlayer from 'react-player'
import './AboutClinic.scss'
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined'

type Props = {}
const AboutClinic = (props: Props) => {
    return (
        <section className="section_about_clinic">
            <div className="container_about">
                <h3 className="first">
                    <FormatIndentIncreaseOutlinedIcon
                        fontSize="large"
                        className="h3_icon"
                    />
                    CLINIC
                </h3>
                <p>вислів</p>
                <article>
                    ARTICLE Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Est illum deleniti qui nisi, vel ea dolore minus
                    assumenda. Odit perferendis consectetur itaque repellendus
                    rem corrupti laborum exercitationem provident. Sunt, dolor.
                </article>
                <p>Мета - яка мета</p>
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
