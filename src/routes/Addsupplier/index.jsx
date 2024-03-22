import React from 'react'
import './Addsupplier.css'
import { useNavigate } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const addsupplier = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [brandName, setBrandName] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [contactInformation, setContactInformation] = useState('')
  const [supplierType, setSupplierType] = useState('')
  const [paymentTerms, setPaymentTerms] = useState('')
  const [ taxid, setTaxid] = useState('')
  const [ status, setStatus] = useState('')
  const [notes, setNotes] = useState('')
  const [ products, setProducts] = useState([])

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const supplier = {id, brandName, contactPerson, contactInformation, supplierType, paymentTerms, taxid, status, notes, products}
    // console.log(supplier)
    dispatch({type: 'ADD_SUPPLIER', payload: supplier})
    navigate('/home')
  }

  return (
    <>
      <div className='add__container'>
        <div className='add__form__container'>
          <div className='close__btn'><IoCloseSharp onClick={() => navigate('/home')} className='close__icon' /></div>
          <form className='add__form' onSubmit={(e) => handleSubmit(e)}>
            <div className='input'><p>ID:</p><input type="number" value={id} onChange={(e) => setId(e.target.value)} /></div>
            <div className='input'><p>brand name:</p><input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} /></div>
            <div className='input'><p>contact person:</p><input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} /></div>
            <div className='input'><p>contact information:</p><input type="text" value={contactInformation} onChange={(e) => setContactInformation(e.target.value)} /></div>
            <div className='input'><p>supplier type:</p><input type="text" value={supplierType} onChange={(e) => setSupplierType(e.target.value)} /></div>
            <div className='input'><p>payment terms:</p><input type="text" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} /></div>
            <div className='input'><p>tax ID:</p><input type="number" value={taxid} onChange={(e) => setTaxid(e.target.value)} /></div>
            <div className='input'><p>status:</p><input type="text" value={status} onChange={(e) => setStatus(e.target.value)} /></div>
            <div className='input'><p>notes:</p><input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} /></div>
            <div className='save__container'><button type='submit' className='save__btn'>Save</button></div>
          </form>
        </div>
      </div>
    </>
  )
}

export default addsupplier