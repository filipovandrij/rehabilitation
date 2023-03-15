import './AboutSetvices.scss'
import CardServices from './CardServices/CardServices'

type Props = {}
const AboutSetvices = (props: Props) => {
    return (
        <section className="section_about_services">
            <h3>SERVICES</h3>
            <div className="container_inner_row">
                <CardServices />
            </div>
        </section>
    )
}
export default AboutSetvices
