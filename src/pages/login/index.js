import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Input, Row } from 'reactstrap';
import { sentUsers } from '../../store/actions/users-action';
// import Form from '../../component/Form';
// import { authentication } from '../../store/actions/login-authentication';

const Login = () => {
    const dispatch = useDispatch()
    const payload = useSelector(state => state.users)
    const addUsers = () => {
        dispatch(sentUsers())
    }
    console.log(payload);
    return (
        <div className='d-flex justify-content-center flex-column' style={{ padding: "8rem" }}>
            <Button onClick={addUsers} className='w-100' outline color='primary'>Click</Button>

            {payload.users.map((item, index) => {
                return (
                    <div key={index}>
                        <span>Name : {item.name}</span><br/>
                        <span>Ages : {item.age}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Login