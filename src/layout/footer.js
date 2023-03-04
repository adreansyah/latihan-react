import React from 'react';
import facebook from '../assets/images/icon_facebook.png'
import instagram from '../assets/images/icon_instagram.png'
import mail from '../assets/images/icon_mail.png'
import twitch from '../assets/images/icon_twitch.png'
import twitter from '../assets/images/icon_twitter.png'
const Footer = () => {
    return (
        <footer className="container-fluid contains mt-5">
            <div className="row gap-4">
                <div className="col-md-4 d-flex flex-column gap-1">
                    <p className="paragraph-title m-0 w-75">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </p>
                    <p className="paragraph-title m-0">
                        binarcarrental@gmail.com
                    </p>
                    <p className="paragraph-title m-0">
                        081-233-334-808
                    </p>
                </div>
                <div className="col-md-1">
                    <p>Our Services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="col-md-3">
                    <p className="paragraph-title">Connect with us</p>
                    <img className='px-1' src={facebook} alt="pict-alt" />
                    <img className='px-1' src={instagram} alt="pict-alt" />
                    <img className='px-1' src={twitter} alt="pict-alt" />
                    <img className='px-1' src={mail} alt="pict-alt" />
                    <img className='px-1' src={twitch} alt="pict-alt" />
                </div>
                <div className="col-md-3">
                    <p className="paragraph-title">
                        Copyright Binar 2022
                    </p>
                    <div className="title-header position-relative my-2"></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer