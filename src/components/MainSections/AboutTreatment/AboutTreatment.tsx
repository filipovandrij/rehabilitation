import { CardContent, Card, Typography, Link } from '@mui/material'
import './AboutTreatment.scss'
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined'
import DoneIcon from '@mui/icons-material/Done'

type Props = {}
const AboutTreatment = (props: Props) => {
    return (
        <section className="section_about_treatment">
            <h3>
                <FormatIndentIncreaseOutlinedIcon
                    fontSize="large"
                    className="h3_icon"
                />
                What do we treat?
            </h3>
            <div className="container_inner_row">
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Treatment of spine diseases
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        Hernias, protrusions of the
                                        intervertebral disc
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Deformations of the spine
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Stenosis of the spinal canal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Osteochondrosis of the spine
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Spondylolisthesis, spondyloarthrosis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Myofascial syndrome
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Radiculitis
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Treatment of joint diseases
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        Arthrosis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Arthritis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Contracture
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Bursitis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Gout
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Osteoarthritis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Osteoporosis
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Treatment of pain syndrome
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        Pain in the joints
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Back ache
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Pain in the neck
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Pelvic pain
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Headache and dizziness
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Tunnel syndromes (pain in the upper and
                                        lower extremities)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Neuralgia of the facial nerve
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Postherpetic neuralgia
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Children's rehabilitation
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        Diseases of the musculoskeletal system
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Children's scoliosis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        ASD, an autistic spectrum disorder,
                                        autism
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        CP is infantile cerebral palsy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        MR Mental retardation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Down syndrome
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        SMA - spinal muscular atrophy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        ССI - craniocerebral injuries
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Prevention and recovery
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        After fractures
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        After sports injuries
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Spinal injuries
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        After operations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Recovery after a stroke
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Therapy during pregnancy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Postpartum rehabilitation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Rehabilitation after Covid
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="cart_text_bg"
                    sx={{ minWidth: 400, marginTop: 5 }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            <DoneIcon fontSize="medium" />
                            Treatment of diseases of the <br /> muscular system
                        </Typography>
                        <hr className="under_line_treatment" />
                        <Typography variant="body2">
                            <ul>
                                <li>
                                    <Link href="#" underline="always">
                                        Weakness in connections
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Myalgia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Myositis
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Hypertonus
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Muscle weakness (hypotonus)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Slaughter
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" underline="always">
                                        Flatfoot
                                    </Link>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export default AboutTreatment
