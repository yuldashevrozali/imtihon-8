import React from 'react'
import Input from '../components/input'

export default function page() {
    return (
        <div>
            <form>
                <h1>CHECKOUT</h1>
                <p>Billing Details</p>
                <div className="details">
                    <Input label='Name' placeholder='Alexei Ward'  />
                    <Input label='Email Address' placeholder='alexei@mail.com'  />
                    <Input label='Phone Number' placeholder='+1 202-555-0136'  />
                </div>
            </form>
        </div>
    )
}
