import { useEffect } from 'react'
import ArticleContent from '../../components/ArticleContent/ArticleContent'
import article from '../../utils/mocks/article'

type Props = {
    cardsOfArticles: string
}
const Articles = ({ cardsOfArticles }: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {article.map(
                ({
                    title,
                    description,
                    imgSrcTitle,
                    imgSrc1,
                    pDescription1,
                    imgSrc2,
                    pDescription2,
                    imgSrc3,
                    pDescription3,
                }) =>
                    cardsOfArticles === title ? (
                        <ArticleContent
                            title={title}
                            description={description}
                            imgSrcTitle={imgSrcTitle}
                            imgSrc1={imgSrc1}
                            pDescription1={pDescription1}
                            imgSrc2={imgSrc2}
                            pDescription2={pDescription2}
                            imgSrc3={imgSrc3}
                            pDescription3={pDescription3}
                        />
                    ) : null
            )}
        </>
    )
}
export default Articles
