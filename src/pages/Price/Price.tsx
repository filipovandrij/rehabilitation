import { useState } from 'react'
import PriceContent from '../../components/PriceContent/PriceContent'
import PriceMainList from '../../components/PriceContent/PriceContentList/PriceMainList'
import priceArr from '../../utils/mocks/priceArr'

type Props = { changeToArtrouse: (enterLink: string) => void }
const Price = ({ changeToArtrouse }: Props) => {
    const [changeRehubBtn, setChangeRehubBtn] = useState<boolean>()
    const clickRehubBtn = (changeRehubBtn: boolean) => {
        setChangeRehubBtn((prevState) => !prevState)
    }
    const [changeConsultationBtn, setChangeConsultationBtn] =
        useState<boolean>()
    const clickConsultationBtn = (changeConsultationBtn: boolean) => {
        setChangeConsultationBtn((prevState) => !prevState)
    }
    const [changeChildrenBtn, setChangeChildrenBtn] = useState<boolean>()
    const clickChildrenBtn = (changeChildrenBtn: boolean) => {
        setChangeChildrenBtn((prevState) => !prevState)
    }
    const [changePhysiotherapyBtn, setChangePhysiotherapyBtn] =
        useState<boolean>()
    const clickPhysiotherapyBtn = (changePhysiotherapyBtn: boolean) => {
        setChangePhysiotherapyBtn((prevState) => !prevState)
    }

    return (
        <>
            <PriceMainList
                changeToArtrouse={changeToArtrouse}
                clickConsultationBtn={clickConsultationBtn}
                clickRehubBtn={clickRehubBtn}
                clickChildrenBtn={clickChildrenBtn}
                clickPhysiotherapyBtn={clickPhysiotherapyBtn}
                changeRehubBtn={changeRehubBtn}
                changeConsultationBtn={changeConsultationBtn}
                changeChildrenBtn={changeChildrenBtn}
                changePhysiotherapyBtn={changePhysiotherapyBtn}
            />

            {priceArr.map(({ category, service, price }) => (
                <>
                    <PriceContent
                        changePhysiotherapyBtn={changePhysiotherapyBtn}
                        changeChildrenBtn={changeChildrenBtn}
                        changeConsultationBtn={changeConsultationBtn}
                        changeRehubBtn={changeRehubBtn}
                        category={category}
                        service={service}
                        price={price}
                    />
                </>
            ))}
        </>
    )
}
export default Price
