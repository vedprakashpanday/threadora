import React from 'react'
import Product1 from '../../assets/images/mens/2.jpg';
const FeaturedProducts = () => {
  return (
   <section className="section-2 py-5">
            <div className="container">
              <h2>Featured Products</h2>
    
              <div className="row mt-4">
                <div className="col-md-3">
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

                 <div className="col-md-3">
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

                 <div className="col-md-3">
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

                 <div className="col-md-3">
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
          </section>
  )
}

export default FeaturedProducts