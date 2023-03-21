import { Container, Paper } from '@mui/material'
import CallBack from '../MainSections/CallBack/CallBack'
import './ArticleContent.scss'
import InformationArticleBlock from './InformationArticleBlock/InformationArticleBlock'

type Props = { title: string; description: string }
const ArticleContent = ({ title, description }: Props) => {
    return (
        <>
            <Container className="main-title-container" maxWidth="xl">
                <section className="inner-title-container">
                    <div className="title-descripton">
                        <h2>{title}</h2>
                        <p>{title} - це визначення</p>
                    </div>
                    <Paper
                        component="img"
                        src="asd"
                        alt="this_picture_article"
                    />
                </section>
            </Container>
            <Container className="description-container" maxWidth="xl">
                <div className="info-box">
                    <img src="/images/look-this.jpg" alt="21312" />
                    <p>
                        {description}
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Qui quos deleniti, nisi blanditiis inventore
                        suscipit. Fuga nobis, officiis recusandae voluptatibus
                        vero soluta et saepe laboriosam consectetur, itaque,
                        expedita eveniet enim.
                    </p>
                </div>
                <CallBack />
                <h3>Title 1</h3>

                <div className="info-box">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Qui quos deleniti, nisi blanditiis inventore
                        suscipit. Fuga nobis, officiis recusandae voluptatibus
                        vero soluta et saepe laboriosam consectetur, itaque,
                        expedita eveniet enim.Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Qui quos deleniti, nisi
                        blanditiis inventore suscipit. Fuga nobis, officiis
                        recusandae voluptatibus vero soluta et saepe laboriosam
                        consectetur, itaque, expedita eveniet enim.Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Qui quos
                        deleniti, nisi blanditiis inventore suscipit. Fuga
                        nobis, officiis recusandae voluptatibus vero soluta et
                        saepe laboriosam consectetur, itaque, expedita eveniet
                        enim.
                    </p>

                    <img src="/images/look-this.jpg" alt="123" />
                </div>
            </Container>
            <InformationArticleBlock />
            <Container className="description-container" maxWidth="xl">
                <div className="info-box">
                    <img src="/images/look-this.jpg" alt="123" />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Qui quos deleniti, nisi blanditiis inventore
                        suscipit. Fuga nobis, officiis recusandae voluptatibus
                        vero soluta et saepe laboriosam consectetur, itaque,
                        expedita eveniet enim.Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Qui quos deleniti, nisi
                        blanditiis inventore suscipit. Fuga nobis, officiis
                        recusandae voluptatibus vero soluta et saepe laboriosam
                        consectetur, itaque, expedita eveniet enim.Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Qui quos
                        deleniti, nisi blanditiis inventore suscipit. Fuga
                        nobis, officiis recusandae voluptatibus vero soluta et
                        saepe laboriosam consectetur, itaque, expedita eveniet
                        enim.
                    </p>
                </div>
            </Container>
        </>
    )
}
export default ArticleContent
