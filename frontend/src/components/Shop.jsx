import React from 'react'
import Layout from './common/Layout'
import Product1 from '../assets/images/mens/1.jpg';

const shop = () => {
  return (
   <Layout>
    <div className="container">
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb mt-3">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Shop</li>
  </ol>
</nav>
    

    <div className="row">
      <div className="col-md-3">
          <div className="card shadow border-0 mb-3">
            <div className="card-body p-4">
              <h3>Categories</h3>
              <ul>
                <li className='mb-2'>
                  <input type="checkbox" name="men" id="men" />
                  <label htmlFor="men" className='ps-2'>Men</label>
                </li>
                <li className='mb-2'>
                  <input type="checkbox" name="women" id="women" />
                  <label htmlFor="women" className='ps-2'>Women</label>
                  </li>
                <li className='mb-2'>
                  <input type="checkbox" name="kids" id="kids" />
                  <label htmlFor="kids" className='ps-2'>Kids</label>
                  </li>
              </ul>
            </div>
          </div>


            <div className="card shadow border-0 mb-3">
            <div className="card-body p-4">
              <h3>Brands</h3>
              <ul>
                <li className='mb-2'>
                  <input type="checkbox" name="Puma" id="Puma" />
                  <label htmlFor="Puma" className='ps-2'>Puma</label>
                </li>
                <li className='mb-2'>
                  <input type="checkbox" name="Killer" id="Killer" />
                  <label htmlFor="Killer" className='ps-2'>Killer</label>
                  </li>
                <li className='mb-2'>
                  <input type="checkbox" name="Levis" id="Levis" />
                  <label htmlFor="Levis" className='ps-2'>Levis</label>
                  </li>

                   <li className='mb-2'>
                  <input type="checkbox" name="VanHeusen" id="VanHeusen" />
                  <label htmlFor="VanHeusen" className='ps-2'>Van Heusen</label>
                  </li>

                   <li className='mb-2'>
                  <input type="checkbox" name="LouisPhilippe" id="LouisPhilippe" />
                  <label htmlFor="LouisPhilippe" className='ps-2'>Louis Philippe</label>
                  </li>
              </ul>
            </div>
          </div>
      </div>
      <div className="col-md-9">
        <div className="row pb-5">
                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-6">
                        <div className="product card border-0">
                          <div className="card-img">
                                <img src={Product1} alt="productimage" className='w-100' />
                          </div>
          
                          <div className="card-body pt-3">
                            <a href="">
                            <p>Men's Check Shirt</p>
                            </a>
          
                            <div className="price">
                              $50 <s>$80</s>
                            </div>
                          </div>
                        </div>
                      </div>
        </div>
      </div>
    </div>
    </div>
   </Layout>
  )
}

export default shop