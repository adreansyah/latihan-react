import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import heroBanner from '../assets/images/img_car.png'
import Button from "../component/Button";
import SideBar from "../component/Sidebar";
const Header = (props) => {
    const navigate = useNavigate();
    const [open, setopen] = useState(false);
    const openSideBar = () => {
        setopen(!open)
    }
    const params = useLocation()
    // console.log(params.pathname.split('/').filter(i => i !== "")[1]);
    return (
        <header id="header-doc" className="container-fluid bg-gray">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between contains">
                    <div className="title-header position-relative my-2"></div>
                    <nav className="navigation d-none d-lg-block d-xxl-block">
                        <ol className="d-flex gap-5 list-unstyled posiition-relative mt-3">
                            <li>Our Services</li>
                            <li>Why Us</li>
                            <li>Testimonial</li>
                            <li>FAQ</li>
                        </ol>
                    </nav>
                    <button
                        onClick={openSideBar}
                        id="click-btn" className="btn d-lg-none d-xl-none "><i className="fa fa-bars"></i></button>
                </div>
            </div>
            {!params.pathname.split('/').filter(i => i !== "")[1] && <div className="row mt-4">
                <div className="col-md-6 p-0 justify-content-between contains">
                    <div id="text-mobil" className="margin-col-slide">
                        <h1 className="title-h1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="paragraph-title w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                            terbaik dengan harga
                            terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <Button
                            type="button"
                            onClick={() => navigate('/cari-mobil')}
                            className="btn btn-success"  >
                            Mulai Sewa Mobil
                        </Button>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="car-slide">
                        <div className="car-display ">
                            <img className="w-100 m-0" src={heroBanner} alt="pict-alert" />
                        </div>
                    </div>
                </div>
            </div>}
            <SideBar open={open} close={openSideBar} />
        </header>
    )
}

export default Header;