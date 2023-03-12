import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { slides } from '../../utils'

type Props = {}
const Slider = (props: Props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((s) => (
                    <SwiperSlide key={s.key}>
                        <img src={s.imageSrc} alt="" />
                        <p className={s.className}>{s.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default Slider
