import React, { useContext } from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThemeContext } from '../../context/Context'
import Profile1 from '../../img/profile1.jpg'
import Profile2 from '../../img/profile2.jpg'
import Profile3 from '../../img/profile3.jpg'
import Profile4 from '../../img/profile4.jpg'
import './testimanial.css'

const Testimanial = () => {
    const { darkMode } = useContext(ThemeContext)
    const clients = [
        {
            id: 1,
            img: Profile1,
            desc: " You are very communicative and receptive to feedback. You also make sure to understand the project well by asking all the necessary question. As well as provided better solutions if mine wasn't quite user-friendly.",
        },
        {
            id: 2,
            img: Profile2,
            desc: 'Great communication and very responsive friendly service! Will hire again!',
        },
        {
            id: 3,
            img: Profile3,
            desc: 'Working with Tino was great. But team has ruined the contract by suspending accounts and not responding to support requests for 5 days.',
        },
        {
            id: 4,
            img: Profile4,
            desc: 'Lovely job done . Looking forward to working with him again.',
        },
    ]
    return (
        <div className="testimanial" id="testimonial">
            <div className="t-ItemInfo">
                <span>Clients always get</span>
                <span>Exceptional work</span>
                <span>from me</span>
            </div>
            {/* Slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {clients.map((client) => (
                    <SwiperSlide key={client.id}>
                        <div className="t-Wrapper">
                            <div className="t-Item">
                                <div className="t-ItemWrapper">
                                    <img src={client.img} alt="clientphoto" />
                                    <span
                                        style={{
                                            color: darkMode ? 'black' : '',
                                        }}
                                    >
                                        {client.desc}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimanial
