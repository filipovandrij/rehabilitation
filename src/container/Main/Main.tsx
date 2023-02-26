import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Link,
    TextField,
    Typography,
} from '@mui/material'
import ReactPlayer from 'react-player'
import Slider from '../../components/Slider/Slider'
import './Main.scss'
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import DoneIcon from '@mui/icons-material/Done'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <main>
                <Slider></Slider>

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
                        />
                    </div>
                </section>

                <Container maxWidth="xl">
                    <section className="call_back">
                        <hr />
                        <h3>
                            <PhoneIcon /> Зворотній зв'зок
                        </h3>
                        <p>
                            Підбір лікарями комплексної індивідуальної програми
                            відновлення
                        </p>
                        <form action="#" className="call-back-form">
                            <TextField
                                className="call-back-text-field"
                                fullWidth
                                id="outlined-basic"
                                label="Ваше ім'я"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Номер телефону"
                                variant="outlined"
                            />
                            <Button
                                className="call-back-btn"
                                variant="contained"
                            >
                                Залишити заявку
                            </Button>
                        </form>
                        <hr />
                    </section>
                    <section className="section_about_services">
                        <h3>
                            <FormatIndentIncreaseOutlinedIcon
                                fontSize="large"
                                className="h3_icon"
                            />
                            SERVICES
                        </h3>
                        <div className="container_inner_row">
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_adult.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Реабілітація для дорослих
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_injection.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Лікувальні блокади
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_children.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Реабілітація для дітей
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_physioterapy.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Фізеотерапія
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_consultation.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Консультація лікарів
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 400, marginTop: 5 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="/images/cart_diagnostic.png"
                                    title="green iguana"
                                />
                                <CardContent className="cart_text_bg">
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Діагностика
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    фіафі
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </Container>
                <section className="section_moving">
                    <div className="moving_bg">
                        <span>
                            Desires are necessary for life to be constantly in
                            motion.
                        </span>
                        <Button
                            className="moving_btn"
                            size="large"
                            variant="contained"
                            sx={{ marginTop: 3 }}
                        >
                            Start moving
                        </Button>
                    </div>
                </section>
                <Container maxWidth="xl">
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
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Hernias, protrusions of the
                                                    intervertebral disc
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Deformations of the spine
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Stenosis of the spinal canal
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Osteochondrosis of the spine
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Spondylolisthesis,
                                                    spondyloarthrosis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Myofascial syndrome
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
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
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Arthrosis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Arthritis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Contracture
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Bursitis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Gout
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Osteoarthritis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
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
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Pain in the joints
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Back ache
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Pain in the neck
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Pelvic pain
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Headache and dizziness
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Tunnel syndromes (pain in
                                                    the upper and lower
                                                    extremities)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Neuralgia of the facial
                                                    nerve
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
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
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Diseases of the
                                                    musculoskeletal system
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Children's scoliosis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    ASD, an autistic spectrum
                                                    disorder, autism
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    CP is infantile cerebral
                                                    palsy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    MR Mental retardation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Down syndrome
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    SMA - spinal muscular
                                                    atrophy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    ССI - craniocerebral
                                                    injuries
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
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    After fractures
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    After sports injuries
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Spinal injuries
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    After operations
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Recovery after a stroke
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Therapy during pregnancy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Postpartum rehabilitation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
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
                                        Treatment of diseases of the <br />{' '}
                                        muscular system
                                    </Typography>
                                    <hr className="under_line_treatment" />
                                    <Typography variant="body2">
                                        <ul>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Weakness in connections
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Myalgia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Myositis
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Hypertonus
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Muscle weakness (hypotonus)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Slaughter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    underline="always"
                                                >
                                                    Flatfoot
                                                </Link>
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </Container>
                <section className="section_recovery">
                    <div className="recovery_bg">
                        <span>
                            Your well-being depends on your own decisions
                        </span>
                        <Button
                            className="moving_btn"
                            size="large"
                            variant="contained"
                            sx={{ marginTop: 3 }}
                        >
                            Start recovery
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Main
