import React, { useContext } from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThemeContext } from '../../context/Context'
import Images from '../../img'

import './portfolio.css'
const Portfolio = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span
                style={{
                    color: darkMode ? 'white' : '',
                }}
            >
                Portfolio
            </span>
            <Swiper
                className="portfolio-slider"
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                }}
            >
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio1} alt="Portfolio1" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://admirable-narwhal-8b1b90.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio2} alt="Portfolio1" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio3} alt="Portfolio3" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio4} alt="Portfolio4" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio5} alt="Portfolio5" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Images.porttfolio6} alt="Portfolio5" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
