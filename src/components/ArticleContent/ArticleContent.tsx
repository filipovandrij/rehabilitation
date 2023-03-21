import { Container, Paper } from '@mui/material'
import CallBack from '../MainSections/CallBack/CallBack'
import './ArticleContent.scss'
import InformationArticleBlock from './InformationArticleBlock/InformationArticleBlock'

type Props = {
    title: string
    description: string
    imgSrcTitle: string
    imgSrc1: string
    pDescription1: string
    imgSrc2: string
    pDescription2: string
    imgSrc3: string
    pDescription3: string
}
const ArticleContent = ({
    title,
    description,
    imgSrcTitle,
    imgSrc1,
    pDescription1,
    imgSrc2,
    pDescription2,
    imgSrc3,
    pDescription3,
}: Props) => {
    return (
        <>
            <Container className="main-title-container" maxWidth="xl">
                <section className="inner-title-container">
                    <div className="title-descripton">
                        <h2>{title}</h2>
                        <p>
                            {title} - {description}
                        </p>
                    </div>
                    <Paper
                        component="img"
                        src={imgSrcTitle}
                        alt="this_picture_article"
                    />
                </section>
            </Container>
            <Container className="description-container" maxWidth="xl">
                <div className="info-box">
                    <img src={imgSrc1} alt="21312" />
                    <p>{pDescription1}</p>
                </div>
                <CallBack />

                <div className="info-box">
                    <p>{pDescription2}</p>

                    <img src={imgSrc2} alt="123" />
                </div>
            </Container>
            <InformationArticleBlock />
            <Container className="description-container" maxWidth="xl">
                <div className="info-box">
                    <img src={imgSrc3} alt="123" />
                    <p>{pDescription3}</p>
                </div>
            </Container>
        </>
    )
}
export default ArticleContent
