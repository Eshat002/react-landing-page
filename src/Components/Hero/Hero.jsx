import React from 'react'
import './Hero.css'
import Elipse from '../../img/elipse.png'
import ogCookie from '../../img/og_cropped.png'
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div id="hero" className="hero">

            <img className='bg-img' src={Elipse} alt="image" />
            <div className="container">
                <div className="row gx-0">
                    {/* <div className="col-lg-1"></div> */}
                    {/* <div className="col-lg-1 first-col mt-3"></div> */}
                    <Fade left>
                        <div className="col-lg-7 first-col mt-3">
                            <h1 className="headline">
                                Not an ordinary
                                <p className='cookie-para'>Cookie
                                    <svg style={{ "marginTop": "-40px" }} className='ms-2' xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none">
                                        <path d="M49.237 8.20593C26.6125 8.20593 8.20605 26.6124 8.20605 49.2368C8.20605 71.8613 26.6125 90.2677 49.237 90.2677C71.8614 90.2677 90.2679 71.8613 90.2679 49.2368C90.2679 26.6124 71.8614 8.20593 49.237 8.20593ZM34.8761 36.9276C35.6847 36.9278 36.4852 37.0874 37.2321 37.397C37.9789 37.7067 38.6575 38.1604 39.229 38.7323C39.8005 39.3042 40.2538 39.983 40.5629 40.7301C40.8721 41.4772 41.0311 42.2778 41.0308 43.0863C41.0305 43.8948 40.871 44.6954 40.5613 45.4422C40.2517 46.1891 39.798 46.8676 39.2261 47.4391C38.6542 48.0107 37.9753 48.4639 37.2283 48.7731C36.4812 49.0822 35.6805 49.2412 34.872 49.2409C33.2392 49.2404 31.6734 48.5912 30.5192 47.4362C29.365 46.2813 28.7169 44.7151 28.7174 43.0822C28.7179 41.4493 29.3671 39.8836 30.5221 38.7294C31.6771 37.5752 33.2433 36.927 34.8761 36.9276ZM66.6382 66.6504C63.236 70.0579 58.9068 72.3895 54.1894 73.3548C49.3124 74.3467 44.2498 73.8477 39.6604 71.9228C35.2563 70.063 31.4894 66.9605 28.82 62.9945L35.6229 58.4114C36.2097 59.2771 36.8826 60.0936 37.6252 60.8322C39.1211 62.3358 40.8951 63.5343 42.8484 64.3608C43.8455 64.7793 44.8795 65.1035 45.9217 65.3128C48.1101 65.7518 50.3639 65.7518 52.5523 65.3128C53.5903 65.0994 54.6243 64.7752 55.6296 64.3567C56.5897 63.9464 57.5334 63.4376 58.4156 62.8468C59.269 62.2642 60.0855 61.5912 60.8405 60.8404C61.5914 60.0936 62.2643 59.2771 62.8469 58.4114L69.6498 62.9945C68.7718 64.3075 67.7583 65.5384 66.6382 66.6504ZM53.3401 49.2368C53.3401 49.2368 55.3916 41.0307 63.5978 41.0307C71.7999 41.0307 73.8555 49.2368 73.8555 49.2368H53.3401Z" fill="#F2C100" />
                                    </svg>
                                </p>

                            </h1>

                            <p className="text">Give your taste buds something unique and tasty</p>
                            <a>Taste the Cookies <span className='now-span'>Now
                                <svg className='ms-4' xmlns="http://www.w3.org/2000/svg" width="79" height="31" viewBox="0 0 79 41" fill="none">
                                    <path d="M76.8333 20.6667L2 20.6667M76.8333 20.6667L58.1666 39.3334M76.8333 20.6667L58.1666 2.00004" stroke="#603913" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span>

                            </a>

                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-5 text-center sec-col">
                            <img className='og-cookie' style={{ width: "100%", marginTop: "-80px" }} src={ogCookie} alt="image" />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Hero