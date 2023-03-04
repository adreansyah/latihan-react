import React, { useState } from 'react';
import Button from '../../component/Button';
import Form from '../../component/Form';
import Input from '../../component/Input';
import SelectBox from '../../component/Selectbox';

const categoryData = [{
    value: 2,
    label: "2 - 4 Orang"
}, {
    value: 4,
    label: "4 - 6 Orang"
}, {
    value: 6,
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
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value);
    }
    return (
        <div className='contains-box position-absolute w-100' style={{ marginTop: "-4rem" }}>
            <Form onSubmit={handleSubmit}>
                <div className='list-form d-flex gap-3 justify-content-evenly'>
                    <Input
                        onChange={handleChange}
                        placeholder="Masukan Nama/Tipe Mobil"
                        className="form-control"
                        name="carName"
                        label={"Nama Mobil"} />
                    <SelectBox
                        onChange={handleChange}
                        name="kapasitas"
                        title="Masukan Kapasitas Mobil"
                        label="Kategori"
                        data={categoryData}
                    />
                    <SelectBox
                        onChange={handleChange}
                        name="harga"
                        title="Masukan Harga Sewa"
                        label="Harga Sewa"
                        data={priceData}
                    />
                    <SelectBox
                        onChange={handleChange}
                        name="status"
                        title="Masukan Status Mobil"
                        label="Status"
                        data={statusData}
                    />
                    <div className='d-flex align-items-center position-relative' style={{ top: "6px" }}>
                        <Button className="btn btn-success">Cari Mobil</Button>
                    </div>
                </div>
            </Form>
        </div>)
}

export default SearchCar