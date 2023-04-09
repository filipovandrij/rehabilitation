import './AboutSetvices.scss'
import CardServices from './CardServices/CardServices'

type Props = {
    changeToArtrouse: (enterLink: string) => void
    cardsOfArticles: string
}
const AboutSetvices = ({ cardsOfArticles, changeToArtrouse }: Props) => {
    return (
        <section className="section_about_services">
            <h3>SERVICES</h3>
            <div className="container_inner_row">
                <CardServices
                    cardsOfArticles={cardsOfArticles}
                    changeToArtrouse={changeToArtrouse}
                />
            </div>
        </section>
    )
}
export default AboutSetvices
