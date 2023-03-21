import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import ListAltIcon from '@mui/icons-material/ListAlt'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import AccessibleIcon from '@mui/icons-material/Accessible'
import './InformationArticleBlock.scss'

type Props = {}
const InformationArticleBlock = (props: Props) => {
    return (
        <>
            <section className="background-block">
                <div>
                    <SelfImprovementIcon fontSize="large" />
                    <p>Individual classes with a physical therapist</p>
                </div>
                <div>
                    <ListAltIcon fontSize="large" />
                    <p>The treatment program is drawn up by the doctor</p>
                </div>
                <div>
                    <QueryStatsIcon fontSize="large" />
                    <p>Precisely dosed loads</p>
                </div>
                <div>
                    <HealthAndSafetyIcon fontSize="large" />
                    <p>Treat the cause, not the symptoms</p>
                </div>
                <div>
                    <AccessibleIcon fontSize="large" />
                    <p>Evidence-based methods of rehabilitation</p>
                </div>
                <h3 className="title-of-box">Rehabilitation in FRC is:</h3>
            </section>
        </>
    )
}
export default InformationArticleBlock
