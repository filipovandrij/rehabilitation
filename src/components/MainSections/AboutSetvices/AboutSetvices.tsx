import './AboutSetvices.scss'
import CardServices from './CardServices/CardServices'

type Props = {
    changeToArtrouse: (enterLink: string) => void
}
const AboutSetvices = ({ changeToArtrouse }: Props) => {
    return (
        <section className="section_about_services">
            <h3>SERVICES</h3>
            <div className="container_inner_row">
                <CardServices changeToArtrouse={changeToArtrouse} />
            </div>
        </section>
    )
}
export default AboutSetvices
