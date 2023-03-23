import AllServicesContent from '../../components/MainSections/AboutSetvices/AllServicesContent/AllServicesContent'
import servicesCard from '../../utils/mocks/servicesCard.mock'

type Props = {
    cardOfServices: string
    changeToArtrouse: (enterLink: string) => void
}
const AllServices = ({ cardOfServices, changeToArtrouse }: Props) => {
    return (
        <>
            {servicesCard.map(
                ({
                    id,
                    description,
                    imgSrc,
                    title,
                    link1,
                    link2,
                    link3,
                    link4,
                    link5,
                }) =>
                    cardOfServices === title ? (
                        <AllServicesContent
                            changeToArtrouse={changeToArtrouse}
                            id={id}
                            description={description}
                            imgSrc={imgSrc}
                            title={title}
                            link1={link1}
                            link2={link2}
                            link3={link3}
                            link4={link4}
                            link5={link5}
                        />
                    ) : null
            )}
        </>
    )
}
export default AllServices
