import { Container } from '@mui/material'
import './PriceContent.scss'

type Props = {
    category: string
    service: string
    price: number
    changePhysiotherapyBtn?: boolean
    changeChildrenBtn?: boolean
    changeRehubBtn?: boolean
    changeConsultationBtn?: boolean
}
const PriceContent = ({
    changePhysiotherapyBtn,
    changeChildrenBtn,
    changeConsultationBtn,
    category,
    service,
    price,
    changeRehubBtn,
}: Props) => {
    return (
        <>
            {category === 'Rehabilitation for adults' && changeRehubBtn ? (
                <Container maxWidth="xl" className="rehub">
                    <span>{service}</span> <span>{price + 'UAH'}</span>
                </Container>
            ) : null}

            {category === 'consultation' && changeConsultationBtn ? (
                <Container maxWidth="xl" className="rehub">
                    <span>{service}</span> <span>{price + 'UAH'}</span>
                </Container>
            ) : null}

            {category === 'Rehabilitation for children' && changeChildrenBtn ? (
                <Container maxWidth="xl" className="rehub">
                    <span>{service}</span> <span>{price + 'UAH'}</span>
                </Container>
            ) : null}
            {category === 'Physiotherapy' && changePhysiotherapyBtn ? (
                <Container maxWidth="xl" className="rehub">
                    <span>{service}</span> <span>{price + 'UAH'}</span>
                </Container>
            ) : null}
        </>
    )
}
export default PriceContent
