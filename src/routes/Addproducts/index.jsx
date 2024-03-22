import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Addproducts = () => {
    
    const lastlocations = useSelector((state) => state.lastLocatereducer.lastLocation)  
    // console.log(lastlocations)
    
    const lastid = useSelector((state) => state.idreducer.lastid)
    console.log(lastid)

    const addingproduct = useSelector((state) => state)
    // console.log(addingproduct.reducer.suppliers)


    const dispatch = useDispatch()
    const [productid, setProductid] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [registrationdate, setRegistrationdate] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {productid, name, description, quantity, price, category, registrationdate}
        // addingproduct.reducer.suppliers[0].products.push(product)
        // navigate(lastlocations)
        addingproduct.reducer.suppliers[0].products.push(product)
        dispatch({type: 'ADD_PRODUCT', payload: product})
        navigate(lastlocations)
    }
    return (
        <>
            <div className='add__container'>
                <div className='add__form__container'>
                    <div className='close__btn'><IoCloseSharp onClick={() => navigate(lastlocations)} className='close__icon' /></div>
                    <form className='add__form' onSubmit={(e) => handleSubmit(e)}>
                        <div className='input'><p>id:</p><input type="number" value={productid} onChange={(e) => setProductid(e.target.value)} /></div>
                        <div className='input'><p>name:</p><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
                        <div className='input'><p>description:</p><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                        <div className='input'><p>quantity:</p><input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></div>
                        <div className='input'><p>price:</p><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
                        <div className='input'><p>category:</p><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /></div>
                        <div className='input'><p>registrationdate:</p><input type="text" value={registrationdate} onChange={(e) => setRegistrationdate(e.target.value)} /></div>
                        <div className='save__container'><button type='submit' className='save__btn'>Save</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addproducts