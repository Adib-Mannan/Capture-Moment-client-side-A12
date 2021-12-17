import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = (props) => {
    const { user } = useAuth();
    const productName = props.singleProduct.name;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.productName = productName;
        fetch('https://polar-ravine-29494.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div className='form-style'>
            <p className='mt-4 pe-5 me-5'>Please Give your information to place order</p>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {/* <input defaultValue={productName} {...register("productName")} /> */}
                <input placeholder='Address' {...register("address")} />
                <input placeholder='City'  {...register("city")} />
                <input placeholder='Number' {...register("number")} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="Submit" className='custom-bg-color text-dark ' value='Buy Now' />
            </form>
        </div>
    );
};

export default PlaceOrder;