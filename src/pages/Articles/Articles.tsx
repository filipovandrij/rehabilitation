import ArticleContent from '../../components/ArticleContent/ArticleContent'
import article from '../../utils/mocks/article'

type Props = {
    cardsOfArtecles: string
}
const Articles = ({ cardsOfArtecles }: Props) => {
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
                    cardsOfArtecles === title ? (
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
