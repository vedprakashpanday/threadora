import React, { useState } from 'react'
import Layout from './common/Layout';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/images/mens/4.jpg';


const Checkout = () => {
    const [paymentMethod,setPaymentMethod] = useState('cod');

    const handlePayment = (e) =>
    {
setPaymentMethod(e.target.value)
    }
  return (
   <Layout>
<div className="container pb-5">
    <div className="row">
        <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                       
                    </ol>
                </nav>
        </div>
    </div>

    <div className="row">
        <div className="col-md-7">
            <h3 className="border-bottom pb-3">
                <strong>Billing Details</strong>
                </h3>

                <form action="">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3"><input type="text" className="form-control" placeholder='name'/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder='email'/>
                                </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <textarea className="form-control" placeholder='address' rows={3}>
                                    </textarea>  
                                </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder='city'/>
                                </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder='state'/>
                                </div>
                        </div>

                         <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder='phone'/>
                                </div>
                        </div>

                         <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder='pincode'/>
                                </div>
                        </div>
                    </div>
                </form>
        </div>

        <div className="col-md-5">
            <h3 className="border-bottom pb-3"><strong>Items</strong></h3>

            <table className='table'>
                                <tbody>
                                    <tr>
                                    <td width={100}>
                                        <img src={ProductImg} alt="ProductImage" width={80}/>
                                    </td>
                                    <td width={600}>
                                         <h4>Dummy Product Title</h4>
                                        <div className="d-flex gap-2 align-items-center pt-3">
                                           
                                            <span>$10</span>
                                            <div>
                                             <button className="btn btn-size w-25 pe-5">XL</button>
                                             </div>
                                             <div className='ps-2'>
                                                x1
                                             </div>
                                        </div>
                                    </td>
                                  
                                  
                                    </tr>
            
                                      <tr>
                                    <td width={100}>
                                        <img src={ProductImg} alt="ProductImage" width={80}/>
                                    </td>
                                    <td width={600}>
                                         <h4>Dummy Product Title</h4>
                                        <div className="d-flex gap-2 align-items-center pt-3">
                                           
                                            <span>$10</span>
                                            <div>
                                             <button className="btn btn-size w-25 pe-5">XL</button>
                                             </div>
                                             <div className='ps-2'>
                                                x1
                                             </div>
                                        </div>
                                        
                                    </td>
                                  
                                   
                                    </tr>
            
                                      <tr>
                                    <td width={100}>
                                        <img src={ProductImg} alt="ProductImage" width={80}/>
                                    </td>
                                    <td width={600}>
                                         <h4>Dummy Product Title</h4>
                                        <div className="d-flex gap-2 align-items-center pt-3">
                                           
                                            <span>$10</span>
                                            <div>
                                             <button className="btn btn-size w-25 pe-5">XL</button>
                                             </div>
                                             <div className='ps-2'>
                                                x1
                                             </div>
                                        </div>
                                        
                                    </td>
                                    
                                  
                                    </tr>
                                </tbody>
                            </table>

                               <div className="row  pb-5">
            <div className="col-md-12">
                <div className="d-flex justify-content-between border-bottom py-2">
                    <div>SubTotal :</div>
                    <div>$80</div>
                </div>
                 <div className="d-flex justify-content-between border-bottom py-2">
                    <div>Shipping : </div>
                    <div>$10</div>
                </div>
                 <div className="d-flex justify-content-between border-bottom py-2">
                    <div><strong>GrandTotal : </strong></div>
                    <div>$90</div>
                </div>
            
            </div>

            <h3 className="border-bottom pt-5 pb-3"><strong>Items</strong></h3>
            <div className='d-flex'>
                 <input type="radio" onClick={handlePayment} checked={paymentMethod == 'online'} value={'online'}  className=" me-2" />
            <label htmlFor="" className='me-2'>Online</label>

             <input type="radio" onClick={handlePayment} checked={paymentMethod == 'cod'} value={'cod'}className="me-2" />
            <label htmlFor="">CoD</label>
            </div>
           
                <div className="d-flex">
                <button className="btn btn-outline-success my-3 ">Pay Now</button>
            </div>
        </div>
        </div>
    </div>
</div>
   </Layout>
  )
}

export default Checkout