import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Button from '../../component/Button';
import Form from '../../component/Form';
import Input from '../../component/Input';
import LoaderSvg from '../../component/Loader';
import Segment from '../../component/segment';
import SelectBox from '../../component/Selectbox';
import useFetchingHooks from '../../hooks/useFetching';

const categoryData = [{
    value: "small",
    label: "2 - 4 Orang"
}, {
    value: "medium",
    label: "4 - 6 Orang"
}, {
    value: "large",
    label: "6 - 8 Orang"
}]

const priceData = [{
    value: 400000,
    label: "< Rp.400.000"
}, {
    value: 600000,
    label: " Rp. 400.000 - Rp. 600.000"
}, {
    value: 400000,
    label: "> Rp.400.000"
}]

const statusData = [{
    value: true,
    label: "Disewa"
}, {
    value: false,
    label: "Tidak Disewa"
}]
const SearchCar = (props) => {
    const [value, setValue] = useState({
        carName: "",
        kapasitas: "",
        harga: "",
        status: ""
    })
    const navigate = useNavigate()
    const [backDrop, setBackDrop] = useState(false)

    const { data, error, loading, setParams } = useFetchingHooks({
        url: "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
        parameter: {
            carName: "",
            kapasitas: "",
            harga: "",
            status: ""
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    document.addEventListener("click", (e) => {
        if (e.target.id === "back-drop") {
            setBackDrop(false)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setParams({
            name: value.carName,
            catgory: value.kapasitas,
            isRented: value.status,
            minPrice: value.harga,
            maxPrice: value.harga
        })
        setBackDrop(false)
    }
    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return (
        <>
            <Segment className='contains-box position-absolute w-100' style={{ marginTop: "-4rem" }}>
                {backDrop && <div id="back-drop" className='backdrop'></div>}
                <Form onSubmit={handleSubmit}>
                    <Segment className='list-form d-flex gap-3 justify-content-evenly'>
                        <Input
                            onFocus={() => { setBackDrop(true) }}
                            onChange={handleChange}
                            placeholder="Masukan Nama/Tipe Mobil"
                            className="form-control"
                            name="carName"
                            label={"Nama Mobil"} />
                        <SelectBox
                            onFocus={() => { setBackDrop(true) }}
                            onChange={handleChange}
                            name="kapasitas"
                            title="Masukan Kapasitas Mobil"
                            label="Kategori"
                            data={categoryData}
                        />
                        <SelectBox
                            onFocus={() => { setBackDrop(true) }}
                            onChange={handleChange}
                            name="harga"
                            title="Masukan Harga Sewa"
                            label="Harga Sewa"
                            data={priceData}
                        />
                        <SelectBox
                            onFocus={() => { setBackDrop(true) }}
                            onChange={handleChange}
                            name="status"
                            title="Masukan Status Mobil"
                            label="Status"
                            data={statusData}
                        />
                        <Segment className='d-flex align-items-center position-relative' style={{ top: "6px" }}>
                            <Button className="btn btn-success">Cari Mobil</Button>
                        </Segment>
                    </Segment>
                </Form>
            </Segment>
            <Segment className="contains-box contains-car">
                {loading === "fetching" && <Segment className="text-center w-100"><LoaderSvg /></Segment>}
                {loading === "reject" && <Segment className="text-center w-100">{error}</Segment>}
                {<Row>
                    {
                        loading === "resolve" && data?.data?.cars?.map((item, index) => {
                            return (
                                <Col key={index} md={4} className="pb-4">
                                    <Segment className="card card-size d-flex flex-column gap-3">
                                        <Segment className="card-image-car">
                                            <img className="img-max-contain" src={item.image} alt="pict-car" />
                                        </Segment>
                                        <Segment className="card-content px-4 pb-4">
                                            <h6>{item.name}</h6>
                                            <p className='card-car-description'>{formatNumber(item.price)} / Hari</p>
                                            <p className='card-car-description'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <Button
                                                onClick={() => navigate(`/cari-mobil/${item.id}`)}
                                                type="button"
                                                className="btn btn-success w-100">Pilih Mobil</Button>
                                        </Segment>
                                    </Segment>
                                </Col>
                            )
                        })
                    }
                </Row>}
            </Segment>
        </>
    )
}

export default SearchCar