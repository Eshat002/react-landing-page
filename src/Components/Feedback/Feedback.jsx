import React from 'react'
import './Feedback.css'
import FeedBackCookie from '../../img/feedback-cookie.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { FeedBackData } from './FeedbackData'
import next from "../../img/next.png";
import prev from "../../img/prev.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Rotate from 'react-reveal/Rotate';



const Feedback = () => {
    const handleCustomPrev2 = () => {
        document.querySelectorAll(".swiper-button-prev")[2].click();
    };

    const handleCustomNext2 = () => {
        document.querySelectorAll(".swiper-button-next")[2].click();
    };

    return (
        <div className="feedback">
            <div className="container-fluid">
                <div className="row">
                    <Rotate bottom left>
                        <div className="col-lg-4">
                            <img className='feedback-cookie' src={FeedBackCookie} alt="image" />
                        </div>
                    </Rotate>
                    <Rotate bottom right>
                        <div className="col-lg-8">
                            <Swiper
                                spaceBetween={120}
                                slidesPerView={1}
                                onSlideChange={() => console.log("slide change")}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation={true}
                                modules={[Navigation, Pagination]}
                            >
                                {FeedBackData.map((feedback) => {
                                    return (
                                        <SwiperSlide key={feedback.id}>
                                            <div className="feedback-card">
                                                <p className='feedback-des'>{feedback.description}</p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <div className="arrow-container mt-4 text-end">
                                <img onClick={handleCustomPrev2} className='me-3' src={prev} alt="prev" />
                                <img onClick={handleCustomNext2} src={next} alt="next" />
                            </div>


                        </div>
                    </Rotate>
                </div>

            </div>
        </div>
    )
}

export default Feedback