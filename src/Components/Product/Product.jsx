import React from "react";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productData } from "./ProductData.js";
import next from "../../img/next.png";
import prev from "../../img/prev.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Product = () => {
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
    <div className="product-section mb-5">
      {/* <img
        style={{ marginTop: "-300px", height: "150px", width: "100%" }}
        src={E}
        alt="image"
      /> */}
      <div className="container-fluid">
        <div className="text-center div-first">
          <h2 className="headline">90+ Variety of Cookies</h2>
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
            {productData.map((product) => {
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

export default Product;
