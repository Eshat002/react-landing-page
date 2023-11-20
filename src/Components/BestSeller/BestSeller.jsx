import React from "react";
import "./BestSeller.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BestSellerData } from "./BestSellerProduct.js";
import next from "../../img/next.png";
import prev from "../../img/prev.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BrownCookes from "../../img/brown-cookie.png"


const BestSeller = () => {
  const handleCustomPrev = () => {
    document.querySelector(".swiper-button-prev").click();
  };

  const handleCustomNext = () => {
    document.querySelector(".swiper-button-next").click();
  };

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="bestseller mb-5">
      <img id="brown-cookies" src={BrownCookes} alt="brown-cookies" />
      {/* <img
        style={{ marginTop: "-300px", height: "150px", width: "100%" }}
        src={E}
        alt="image"
      /> */}
      <div className="container-fluid">
        <div className="div-first">
          <h2 className="headline">Shop Our BestSellers
            <span><svg xmlns="http://www.w3.org/2000/svg" width="79" height="41" viewBox="0 0 79 41" fill="none">
              <path d="M76.8333 20.6666L2 20.6666M76.8333 20.6666L58.1666 39.3333M76.8333 20.6666L58.1666 1.99992" stroke="#603913" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
          </h2>
        </div>
        {/* <div className="div-middle">
          <Swiper
            spaceBetween={150}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation, Pagination]}
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <div className="product-card">
                <div className="image-container">
                  <img
                    style={{ width: "100%" }}
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <div className="price">
                    <p>RS 250</p>
                  </div>
                  <div className="product-title">
                    <p>Lemonita</p>
                    <p>Touch of lemon</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <div className="image-container">
                  <img
                    style={{ width: "100%" }}
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <div className="price">
                    <p>RS 250</p>
                  </div>
                  <div className="product-title">
                    <p>Lemonita</p>
                    <p>Touch of lemon</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <div className="image-container">
                  <img
                    style={{ width: "100%" }}
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <div className="price">
                    <p>RS 250</p>
                  </div>
                  <div className="product-title">
                    <p>Lemonita</p>
                    <p>Touch of lemon</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="product-card">
                <div className="image-container">
                  <img
                    style={{ width: "100%" }}
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <div className="price">
                    <p>RS 250</p>
                  </div>
                  <div className="product-title">
                    <p>Lemonita</p>
                    <p>Touch of lemon</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <div className="image-container">
                  <img
                    style={{ width: "100%" }}
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="product-details">
                  <div className="price">
                    <p>RS 250</p>
                  </div>
                  <div className="product-title">
                    <p>Lemonita</p>
                    <p>Touch of lemon</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}

        <div className="div-middle">
          <Swiper
            spaceBetween={150}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation, Pagination]}
            breakpoints={breakpoints}
          >
            {BestSellerData.map((product) => {
              console.log(product.productImage);
              return (
                <SwiperSlide key={product.id}>
                  <div className="product-card">
                    <div className="image-container">
                      <img
                        style={{ width: "100%" }}
                        src={product.productImage}
                        alt="product"
                      />
                    </div>
                    <div className="product-details">
                      <div className="price">
                        <p>{product.price}</p>
                      </div>
                      <div className="product-title">
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="text-center">
          <button className="view-all-btn">View All</button>
        </div>
      </div>
      <div onClick={handleCustomPrev} className="custom-button-prev">
        <img src={prev} alt="prev" />
      </div>
      <div onClick={handleCustomNext} className="custom-button-next">
        <img src={next} alt="next" />
      </div>
    </div>
  );
};

export default BestSeller;
