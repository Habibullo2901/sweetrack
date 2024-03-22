import React, { useEffect } from 'react'
import sweetrack from "../Login/SweeTrack.png"
import './Home.css'
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const suppliers = useSelector((state) => state.reducer.suppliers)
  // console.log(suppliers)
  return (
    <>
      <div>
        <div className='sidebar'>
          <div>
            <img src={sweetrack} width={220} alt="" />
            <p className='supplier'>supplier</p>
          </div>
          <div>
            <p className='settings'><IoSettingsOutline /> Settings</p>
          </div>
        </div>
        <div className='home'>
          <div className='tab'>
            <p>supplier {'>'}</p>
            <div className='circles'>
              <div className='circle'><GoBell /></div>
              <div className='circle'></div>
            </div>
          </div>
          <table className='suppliers__table'>
            <thead className='thead'>
              <tr>
                <th>ID</th>
                <th>brand name</th>
                <th>contact person</th>
                <th>contact info</th>
                <th>supplier type</th>
                <th>payment terms</th>
                <th>tax ID</th>
                <th>status</th>
                <th>notes</th>
              </tr>
            </thead>
            <tbody>
              {
                suppliers?.map(supplier =>  {
                  return (
                    <tr onClick={(e) => navigate(`/home/suppliers/${supplier.id}`)}>
                      <td><p>{supplier.id}</p></td>
                      <td><p>{supplier.brandName}</p></td>
                      <td><p>{supplier.contactPerson}</p></td>
                      <td><p>{supplier.contactInformation}</p></td>
                      <td><p>{supplier.supplierType}</p></td>
                      <td><p>{supplier.paymentTerms}</p></td>
                      <td><p>{supplier.taxid}</p></td>
                      <td><p>{supplier.status}</p></td>
                      <td><p>{supplier.notes}</p></td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
          <div className='add__supplier'><Link to={'/home/addsupplier'}><IoAddSharp className='icon' /></Link></div>
        </div>
      </div>
    </>
  )
}

export default Home 