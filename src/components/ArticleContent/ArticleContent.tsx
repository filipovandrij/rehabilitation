import { Container } from '@mui/material'
import './ArticleContent.scss'

type Props = { title: string; description: string }
const ArticleContent = ({ title, description }: Props) => {
    return (
        <>
            <Container className="main-container" maxWidth="xl">
                <section className="title-box">
                    <div className="title-descripton">
                        <h2>{title}</h2>
                        <p>{title} - це визначення</p>
                    </div>
                    <img className="title-picture" src="123" alt="" />
                </section>
            </Container>
            <Container maxWidth="xl"></Container>
        </>
    )
}
export default ArticleContent
