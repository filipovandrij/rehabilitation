import ArticleContent from '../../components/ArticleContent/ArticleContent'
import article from '../../utils/mocks/article'

type Props = {
    cardsOfArtecles: string
}
const Articles = ({ cardsOfArtecles }: Props) => {
    return (
        <>
            {article.map(({ title, description }) =>
                cardsOfArtecles === title ? (
                    <ArticleContent title={title} description={description} />
                ) : null
            )}
        </>
    )
}
export default Articles
