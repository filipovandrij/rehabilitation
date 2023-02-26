import { Card, CardContent, Container, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import BoyIcon from '@mui/icons-material/Boy'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import CachedIcon from '@mui/icons-material/Cached'
import './AboutUs.scss'

type Props = {}
const AboutUs = (props: Props) => {
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
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <BoyIcon fontSize="large" />
                                            FRC ADULT
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            Medical fitness for adults - complex
                                            rehabilitation of the spine and
                                            joints according to an individual
                                            program drawn up by a doctor. The
                                            program has precisely dosed loads
                                            and includes advanced rehabilitation
                                            techniques
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <VaccinesIcon fontSize="large" />
                                            FRC PAIN
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            Medicinal blockades (minimally
                                            invasive surgical treatment of
                                            pain), performed under visual
                                            navigation, and allow the
                                            introduction of the drug directly to
                                            the source of pain, which guarantees
                                            the maximum and fastest therapeutic
                                            effect.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <ChildCareIcon fontSize="large" />
                                            FRC KIDS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            Pediatric rehabilitation is a
                                            combination of physical therapy,
                                            developmental therapy, and sensory
                                            therapy for children with diseases
                                            of the nervous and musculoskeletal
                                            systems. The recovery program is
                                            drawn up by a council of doctors and
                                            guarantees an individual approach to
                                            each patient.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <PregnantWomanIcon fontSize="large" />
                                            FRC PREGNANT
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            An individual rehabilitation program
                                            is developed by a physical
                                            rehabilitation doctor together with
                                            an obstetrician-gynecologist, and is
                                            designed to eliminate or reduce the
                                            pain syndrome, adapt the pregnant
                                            woman's body to her current state,
                                            prepare for childbirth and
                                            postpartum rehabilitation
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <SportsGymnasticsIcon fontSize="large" />
                                            FRC SPORT
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            A training program for a safe return
                                            to sport after a break or injury. A
                                            physical therapist together with a
                                            doctor will help to form the right
                                            training plan with a gradual
                                            increase in loads. The transition to
                                            higher intensity exercises will
                                            occur smoothly and without health
                                            risks.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 400, margin: 5 }}>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            <CachedIcon fontSize="large" />
                                            FRC KIDS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                paddingTop: 2,
                                                margin: 2,
                                            }}
                                            variant="body2"
                                        >
                                            Individual recovery programs after
                                            injuries and operations, for
                                            patients after a stroke, with
                                            cerebral palsy, with attention
                                            deficit hyperactivity disorder.
                                            Physical rehabilitation after
                                            suffering from Covid 19.
                                            Comprehensive programs are designed
                                            to return patients with physical
                                            limitations to an active life as
                                            quickly as possible.
                                        </Typography>
                                    </CardContent>
                                </Card>
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
                        <div className="looking-mri"></div>
                    </section>
                </Container>
            </section>
        </>
    )
}
export default AboutUs
