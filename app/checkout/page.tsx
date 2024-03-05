'use client'
import React, { useState } from 'react'
import Input from '../components/input'
import '../styles/input.css'
import { Radio, Space } from 'antd'

export default function page() {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <form>
                <h1>CHECKOUT</h1>
                <p>Billing Details</p>
                <div className="details">
                    <Input label='Name' placeholder='Alexei Ward' />
                    <Input label='Email Address' placeholder='alexei@mail.com' />
                    <Input label='Phone Number' placeholder='+1 202-555-0136' />
                </div>
                <div className="shipping">
                    <Input label='Address' placeholder='1137 Williams Avenue' />
                    <div className="zip">
                        <Input label='ZIP Code' placeholder='10001' />
                        <Input label='City' placeholder='New York' />
                        <Input label='Country' placeholder='United States' />
                    </div>
                    <div className="payments">
                        <h1>payment details</h1>
                        <div className="payment">
                            <div className="payment-left">
                                <p>Payment Method</p>
                            </div>
                            <div className="payment-right">
                                <Radio.Group onChange={onChange} value={value}>
                                    <Space direction="vertical">
                                        <Radio style={{ border: '1px solid #D87D4A', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '21px', fontSize: '18px', width: '309px', borderRadius: '8px' }} value={1}>e-Money</Radio>
                                        <Radio style={{ border: '1px solid #D87D4A', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '21px', fontSize: '18px', width: '309px', borderRadius: '8px' }} value={2}>Cash on Delivery</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                        </div>

                    </div>

                    <div className="e-money-number">
                    <Input label='e-Money Number' placeholder='238521993' />
                    <Input label='e-Money PIN' placeholder='6891' />

                    </div>

                </div>
            </form>
        </div>
    )
}
