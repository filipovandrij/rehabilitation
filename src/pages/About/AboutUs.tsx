import { Container } from '@mui/material'
import ReactPlayer from 'react-player'
import './AboutUs.scss'
import InfoCards from '../../components/InfoCard/infoCards'
import { useEffect } from 'react'

type Props = {}
const AboutUs = (props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="about-us">
                <Container maxWidth="xl">
                    <section className="inner-section-first">
                        <div className="description">
                            <h3 className="title">About Clinic</h3>
                            <p>
                                FR Clinic - it's a physical rehabilitation
                                center for children and adults
                            </p>
                            <p>
                                Our center combines minimally invasive surgical
                                treatment of pain syndromes with modern methods
                                of rehabilitation and physiotherapy.
                            </p>
                            <h4>
                                Our goal is to return to an active life without
                                pain!
                            </h4>
                        </div>
                        <div className="description-video">
                            <ReactPlayer
                                className="content_video"
                                url="https://www.youtube.com/embed/4Sxybl1VaRY"
                                title="YouTube video player"
                            />
                        </div>
                    </section>
                    <section className="inner-section-second">
                        <div className="column-container">
                            <h3 className="title">We will help everyone</h3>

                            <div className="row-container">
                                <InfoCards></InfoCards>
                            </div>
                        </div>
                    </section>
                    <section className="inner-section-third">
                        <div className="description-third">
                            <h3 className="title">
                                Work is focused on results!
                            </h3>
                            <p>
                                The recovery program is drawn up by a doctor
                                individually for each patient, and includes
                                advanced rehabilitation techniques referring to
                                international treatment protocols. At each stage
                                of treatment, professional doctors monitor the
                                dynamics of the process and, if necessary,
                                adjust the rehabilitation program.
                            </p>
                        </div>
                        <div className="image-div"></div>
                    </section>
                </Container>
            </section>
        </>
    )
}
export default AboutUs
