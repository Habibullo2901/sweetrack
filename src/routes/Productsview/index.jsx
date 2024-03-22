import React, { useEffect } from 'react'
import sweetrack from "../Login/SweeTrack.png"
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GoHomeFill } from "react-icons/go";
import { useParams } from 'react-router-dom';

const productsview = () => {
  const idproduct = useParams()
  // console.log(idproduct.id)

  const dispatch = useDispatch()
    const lastlocation = useLocation().pathname

  // const navigate = useNavigate()
  useEffect(() => {
    dispatch({ type: 'LAST_LOCATION', location: lastlocation })
    dispatch({ type: 'LAST_ID', id: idproduct.id })
  }, [])

    const products = useSelector(state => state.reducer.suppliers[0].products)

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
            <p>supplier {'>'} products {'>'}</p>
            <div className='circles'>
              <div className='circle'><GoBell /></div>
              <div className='circle'><Link to='/home'><GoHomeFill className='add__icon' /></Link></div>
            </div>
            
          </div>
          <table className='suppliers__table'>
            <thead className='thead'>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
                <th>quantity</th>
                <th>price</th>
                <th>category</th>
                <th>registrationdate</th>
              </tr>
            </thead>
            <tbody>
              {
                  products.map(supplier =>  {
                    return (
                        <tr>
                            <td><p>{supplier.productid}</p></td>
                            <td><p>{supplier.name}</p></td>
                            <td><p>{supplier.description}</p></td>
                            <td><p>{supplier.quantity}</p></td>
                            <td><p>{supplier.price}</p></td>
                            <td><p>{supplier.category}</p></td>
                            <td><p>{supplier.registrationdate}</p></td>
                        </tr>
                    )
                  })
                }
            </tbody>
          </table>
          <div className='add__supplier'><Link to={'/home/addproducts'}><IoAddSharp className='icon' /></Link></div>
        </div>
      </div>
    </>
  )
}

export default productsview