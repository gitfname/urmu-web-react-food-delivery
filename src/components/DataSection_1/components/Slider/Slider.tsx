
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react"

interface Props {
    data: Array<any>;
    renderer(data: any): ReactNode;
    sliderClassName?: string
}

function Slider({ data, renderer, sliderClassName="" }: Props) {
    return (
        <Swiper
            dir="ltr"
            slidesPerView={1.1}
            spaceBetween={8}
            breakpoints={{
                640: {
                    slidesPerView: 2.1
                },
                768: {
                    slidesPerView: 3.1
                },
                1080: {
                    slidesPerView: 4
                }
            }}
            className={sliderClassName}
        >

            {
                data.map(item => (
                    <SwiperSlide key={item.id} className="!h-full">
                        {renderer(item)}
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default Slider