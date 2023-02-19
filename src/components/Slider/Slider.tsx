import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper'

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
                <SwiperSlide>
                    <img src="/images/slide_one.jpg" alt="" />
                    <p className="p_slide_one">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide_two.jpg" alt="" />
                    <p className="p_slide_two">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide_thrie.jpg" alt="" />
                    <p className="p_slide_thrie">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide_fouth.jpg" alt="" />
                    <p className="p_slide_fouth">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Slider
