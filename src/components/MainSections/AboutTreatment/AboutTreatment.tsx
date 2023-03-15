import { CardContent, Card, Typography, Link } from '@mui/material'
import './AboutTreatment.scss'
import DoneIcon from '@mui/icons-material/Done'
import CardTreatment from './CardTreatment/CardTreatment'

type Props = {}
const AboutTreatment = (props: Props) => {
    return (
        <section className="section_about_treatment">
            <h3>What do we treat?</h3>
            <div className="container_inner_row">
                <CardTreatment />
            </div>
        </section>
    )
}
export default AboutTreatment
