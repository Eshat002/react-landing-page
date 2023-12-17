import React from 'react'
import './Footer.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aurc8zw', 'template_ouy045h', form.current, 'bY4cHb6v3Qcr3OhrP')
            .then((result) => {
                console.log(result.text);
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="footer" className="footer">
            <div className="container-fluid">
                <div className="row">
                    <Fade top>
                        <div className="col-lg first-col">
                            <h1 className="footer-title">Silly Designer</h1>
                            <p className='des'>An UI/UX Designer with an eye for design and thrust for knowledge</p>
                            <div className="social-container mt-4">
                                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                    <path d="M52.4219 6.67188H8.57812C7.52373 6.67188 6.67188 7.52373 6.67188 8.57812V52.4219C6.67188 53.4763 7.52373 54.3281 8.57812 54.3281H52.4219C53.4763 54.3281 54.3281 53.4763 54.3281 52.4219V8.57812C54.3281 7.52373 53.4763 6.67188 52.4219 6.67188ZM46.9176 20.5815H43.111C40.1266 20.5815 39.5487 21.9993 39.5487 24.0843V28.6771H46.6733L45.744 35.8673H39.5487V54.3281H32.1203V35.8732H25.9071V28.6771H32.1203V23.3754C32.1203 17.2218 35.8792 13.868 41.3716 13.868C44.0046 13.868 46.2623 14.0646 46.9235 14.1539V20.5815H46.9176Z" fill="#FFFDFD" fillOpacity="0.6" />
                                </svg>
                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                    <path d="M30.5 22.5593C26.1276 22.5593 22.5593 26.1276 22.5593 30.5C22.5593 34.8725 26.1276 38.4407 30.5 38.4407C34.8725 38.4407 38.4408 34.8725 38.4408 30.5C38.4408 26.1276 34.8725 22.5593 30.5 22.5593ZM54.3162 30.5C54.3162 27.2117 54.346 23.9532 54.1614 20.6709C53.9767 16.8584 53.107 13.4748 50.3191 10.6869C47.5252 7.89308 44.1476 7.02931 40.3351 6.84464C37.0468 6.65997 33.7883 6.68976 30.506 6.68976C27.2177 6.68976 23.9592 6.65997 20.6769 6.84464C16.8644 7.02931 13.4808 7.89904 10.6929 10.6869C7.89906 13.4808 7.03529 16.8584 6.85062 20.6709C6.66596 23.9592 6.69574 27.2177 6.69574 30.5C6.69574 33.7823 6.66596 37.0468 6.85062 40.3291C7.03529 44.1416 7.90502 47.5252 10.6929 50.3131C13.4868 53.1069 16.8644 53.9707 20.6769 54.1554C23.9652 54.34 27.2237 54.3103 30.506 54.3103C33.7943 54.3103 37.0528 54.34 40.3351 54.1554C44.1476 53.9707 47.5312 53.101 50.3191 50.3131C53.1129 47.5192 53.9767 44.1416 54.1614 40.3291C54.352 37.0468 54.3162 33.7883 54.3162 30.5ZM30.5 42.7179C23.7388 42.7179 18.2822 37.2612 18.2822 30.5C18.2822 23.7388 23.7388 18.2821 30.5 18.2821C37.2613 18.2821 42.7179 23.7388 42.7179 30.5C42.7179 37.2612 37.2613 42.7179 30.5 42.7179ZM43.2183 20.6352C41.6397 20.6352 40.3649 19.3604 40.3649 17.7818C40.3649 16.2031 41.6397 14.9283 43.2183 14.9283C44.7969 14.9283 46.0717 16.2031 46.0717 17.7818C46.0722 18.1566 45.9987 18.5279 45.8555 18.8743C45.7122 19.2207 45.5021 19.5354 45.237 19.8005C44.972 20.0655 44.6572 20.2757 44.3108 20.4189C43.9644 20.5622 43.5932 20.6356 43.2183 20.6352Z" fill="#FFFDFD" fillOpacity="0.6" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                    <path d="M51.2401 17.385C43.9201 6.09997 28.9751 2.74497 17.3851 9.75997C6.10006 16.775 2.44006 32.025 9.76006 43.31L10.3701 44.225L7.93006 53.375L17.0801 50.935L17.9951 51.545C21.9601 53.68 26.2301 54.9 30.5001 54.9C35.0751 54.9 39.6501 53.68 43.6151 51.24C54.9001 43.92 58.2551 28.975 51.2401 17.385ZM44.8351 40.87C43.6151 42.7 42.0901 43.92 39.9551 44.225C38.7351 44.225 37.2101 44.835 31.1101 42.395C25.9251 39.955 21.6551 35.99 18.6051 31.415C16.7751 29.28 15.8601 26.535 15.5551 23.79C15.5551 21.35 16.4701 19.215 17.9951 17.69C18.6051 17.08 19.2151 16.775 19.8251 16.775H21.3501C21.9601 16.775 22.5701 16.775 22.8751 17.995C23.4851 19.52 25.0101 23.18 25.0101 23.485C25.3151 23.79 25.3151 24.4 25.0101 24.705C25.3151 25.315 25.0101 25.925 24.7051 26.23C24.4001 26.535 24.0951 27.145 23.7901 27.45C23.1801 27.755 22.8751 28.365 23.1801 28.975C24.4001 30.805 25.9251 32.635 27.4501 34.16C29.2801 35.685 31.1101 36.905 33.2451 37.82C33.8551 38.125 34.4651 38.125 34.7701 37.515C35.0751 36.905 36.6001 35.38 37.2101 34.77C37.8201 34.16 38.1251 34.16 38.7351 34.465L43.6151 36.905C44.2251 37.21 44.8351 37.515 45.1401 37.82C45.4451 38.735 45.4451 39.955 44.8351 40.87Z" fill="#FFFDFD" fillOpacity="0.6" />
                                </svg>
                            </div>

                        </div>
                        {/* <div className="col-lg-1"></div> */}
                        <div className="col-lg">
                            <h1 className="footer-title">Shop</h1>
                            <p><a href="" className="footer-link">Waffles</a></p>
                            <p><a href="" className="footer-link">Freshly baked cookies</a></p>
                            <p><a href="" className="footer-link">Choclates</a></p>
                            <p><a href="" className="footer-link">Breakfast essentials</a></p>
                            <p><a href="" className="footer-link">Confectionaries</a></p>
                        </div>
                        <div className="col-lg">
                            <h1 className="footer-title">Information</h1>
                            <p><a href="" className="footer-link">Waffles</a></p>
                            <p><a href="" className="footer-link">Freshly baked cookies</a></p>
                            <p><a href="" className="footer-link">Choclates</a></p>
                            <p><a href="" className="footer-link">Breakfast essentials</a></p>
                            <p><a href="" className="footer-link">Confectionaries</a></p>
                        </div>


                        <div className="col-lg">
                            <h1 className="footer-title">Newsletter</h1>
                            <p className='des'>Subscribe for latest updates and offers</p>
                            <div className="from-container">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="email" name="email" className='' placeholder='Enter you email id' />
                                    <div><button type="submit">Subscribe</button></div>
                                </form>
                                {/* <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form> */}
                            </div>

                        </div>
                    </Fade>
                </div>


            </div>
        </div>
    )
}

export default Footer