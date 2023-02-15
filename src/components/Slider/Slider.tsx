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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque quidem mollitia pariatur voluptatibus qui
                        incidunt culpa illo magnam consectetur provident iusto,
                        tempora alias. Aliquid accusamus officia beatae, eius
                        voluptates eveniet.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
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
