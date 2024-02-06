import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './carousel.module.css';
import client1 from "@/assets/1.png";
import client2 from "@/assets/2.png";
import client3 from "@/assets/3.png";
import client4 from "@/assets/4.png";
import client5 from "@/assets/5.png";
import Image from "next/image";

export default function CarouselClients() {
        return(
        <div className={styles.main_carousel_container}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                className={styles.container_my_swiper}

            >
                <div className="swiper-wrapper">
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src={client1}
                            alt="Picture of the author"
                            priority={true}
                            className={styles.image_slide}
                        />
                    </SwiperSlide>
                </div>
                <div className="swiper-wrapper">
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src={client2}
                            alt="Picture of the author"
                            priority={true}
                            className={styles.image_slide}
                        />
                    </SwiperSlide>
                </div>
                <div className="swiper-wrapper">
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src={client3}
                            alt="Picture of the author"
                            priority={true}
                            className={styles.image_slide}
                        />
                    </SwiperSlide>
                </div>
                <div className="swiper-wrapper">
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src={client4}
                            alt="Picture of the author"
                            priority={true}
                            className={styles.image_slide}
                        />
                    </SwiperSlide>
                </div>
                <div className="swiper-wrapper">
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src={client5}
                            alt="Picture of the author"
                            priority={true}
                            className={styles.image_slide}
                        />
                    </SwiperSlide>
                </div>
            </Swiper>
            <div className={styles.txt_info_image}>
                <p>
                    Lorem ipsum dolor sit amet, consecrate disciplining elite.
                </p>
            </div>
        </div>
    )
}