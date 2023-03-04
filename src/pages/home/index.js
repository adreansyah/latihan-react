import React from 'react';
import heroServices from "../../assets/images/img_service.png";
import icon_1 from "../../assets/images/Group 53.svg"
import complete from "../../assets/images/icon_complete.svg"
import price from "../../assets/images/icon_price.svg"
import hours from "../../assets/images/icon_24hrs.svg"
import profesional from '../../assets/images/icon_professional.svg'
import people from '../../assets/images/Ellipse 10.png'
import star from '../../assets/images/Star 1.png'
const Home = (props) => {
    return (
        <>
            <section className="container-fluid contains">
                <div className="row d-flex align-items-center mt-5 pt-4">
                    <div className="col-md-6 text-center mb-5">
                        <img className="img-fit" src={heroServices} alt="hero-service" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="title-h1">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p className="paragraph-title my-4">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                            murah
                            dibandingkan yang lain,
                            kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting,
                            dll.
                        </p>
                        <ul className="list-unstyled">
                            <li className="paragraph-title lh-3 my-2">
                                <img src={icon_1} alt="group-svg" />
                                <span className="ms-2"> Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                            </li>
                            <li className="paragraph-title lh-3 my-2" alt="group-svg">
                                <img src={icon_1} alt="group-svg" />
                                <span className="ms-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                            </li>
                            <li className="paragraph-title lh-3 my-2" alt="group-svg">
                                <img src={icon_1} alt="group-svg" />
                                <span className="ms-2">Sewa Mobil Jangka Panjang Bulanan</span>
                            </li>
                            <li className="paragraph-title lh-3 my-2" alt="group-svg">
                                <img src={icon_1} alt="group-svg" />
                                <span className="ms-2">Gratis Antar - Jemput Mobil di Bandara</span>
                            </li>
                            <li className="paragraph-title lh-3 my-2" alt="group-svg">
                                <img src={icon_1} alt="group-svg" />
                                <span className="ms-2">Layanan Airport Transfer / Drop In Out</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-3 pt-4">
                    <div className="card-why-us">
                        <h2 className="title-h1">Why Us</h2>
                        <p className="paragraph-title">
                            Mengapa harus pilih Binar Car Rental?
                        </p>
                        <div className="card-container gap-3">
                            <div className="card-box">
                                <img src={complete} alt="group-svg" />
                                <span className="paragraph-title">Mobil Lengkap</span>
                                <p className="paragraph-title">
                                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={price} alt="group-svg" />
                                <span className="paragraph-title">Harga Murah</span>
                                <p className="paragraph-title">
                                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={hours} alt="group-svg" />
                                <span className="paragraph-title">Layanan 24 Jam</span>
                                <p className="paragraph-title">
                                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                </p>
                            </div>
                            <div className="card-box">
                                <img src={profesional} alt="group-svg" />
                                <span className="paragraph-title">Sopir Profesional</span>
                                <p className="paragraph-title">
                                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-5">
                    <h2 className="title-h1 text-center">Testimonial</h2>
                    <p className="paragraph-title text-center">
                        Berbagai review positif dari para pelanggan kami
                    </p>
                    <div className="justify-content-center gap-4 overflow-hidden d-none d-xl-flex">
                        <div className="col-sm-4 list-card-testimonial p-5">
                            <div className="d-flex flex-rows gap-5">
                                <div className="d-flex align-items-center">
                                    <img src={people} alt='people' />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div>
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                    </div>
                                    <p className="m-0 paragraph-title">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor
                                        sit
                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="m-0 paragraph-title">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 list-card-testimonial p-5">
                            <div className="d-flex flex-rows gap-5">
                                <div className="d-flex align-items-center">
                                    <img src={people} alt='people' />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div>
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                    </div>
                                    <p className="m-0 paragraph-title">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor
                                        sit
                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="m-0 paragraph-title">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 list-card-testimonial p-5">
                            <div className="d-flex flex-rows gap-5">
                                <div className="d-flex align-items-center">
                                    <img src={people} alt='people' />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div>
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                    </div>
                                    <p className="m-0 paragraph-title">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor
                                        sit
                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="m-0 paragraph-title">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="justify-content-center gap-4 overflow-hidden d-xl-none d-flex ">
                        <div className="col-sm-4 list-card-testimonial p-5">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-self-center">
                                    <img src={people} alt='people' />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div>
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                        <img src={star} alt="pict-group" />
                                    </div>
                                    <p className="m-0 paragraph-title">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor
                                        sit
                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="m-0 paragraph-title">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid contains mt-5">
                <div className="sewa-mobil-sekarang w-full p-5 d-flex flex-column gap-2">
                    <div className="text-center">
                        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-sewa-mobil d-inline-flex align-self-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success">Mulai Sewa Mobil</button>
                    </div>
                </div>
            </section>
            <section className="container-fluid contains mt-5">
                <div className="d-flex flex-rows flex-wrap justify-content-around">
                    <div className="text-center d-block d-lg-none d-xxl-none">
                        <h3>Frequently Asked Question </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="d-none d-lg-block d-xxl-block">
                        <h3>Frequently Asked Question </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <div className="w-straight-faq">
                            <ul className="list-unstyled d-flex flex-column gap-2 w-full">
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Apa saja syarat yang dibutuhkan?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Berapa hari sebelumnya sabaiknya booking sewa mobil?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Apakah Ada biaya antar-jemput?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Bagaimana jika terjadi kecelakaan</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home