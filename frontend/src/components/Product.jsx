import React, {useState} from 'react'
import Layout from './common/Layout';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImg from '../assets/images/mens/3.jpg';
import ProductImg1 from '../assets/images/mens/4.jpg';
import ProductImg2 from '../assets/images/mens/5.jpg';


const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
     const [rating, setRating] = useState(4);
  return (
    <Layout>
<div className="container product-detail">
    <div className="row">
        <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item " aria-current="page"><Link to="/shop">Shop</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Product Title</li>
                    </ol>
                </nav>
        </div>
    </div>

    <div className="row mb-5">
        <div className="col-md-5">
            <div className="row">
                <div className="col-2">
                    <Swiper
    style={{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#000',
        }}
        onSwiper={setThumbsSwiper}
        loop={true}
        direction={`vertical`}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
    >
            
    <SwiperSlide>
        <div className='content'>
            <img 
                src={ProductImg} 
                alt="" 
                height={100}
                className='w-100' />
        </div>                                                                      
    </SwiperSlide>

    <SwiperSlide>
        <div className='content'>
            <img 
                src={ProductImg1} 
                alt="" 
                height={100}
                className='w-100' />
        </div>                                                                      
    </SwiperSlide>

     <SwiperSlide>
        <div className='content'>
            <img 
                src={ProductImg2} 
                alt="" 
                height={100}
                className='w-100' />
        </div>                                                                      
    </SwiperSlide>
</Swiper>


                </div>
                <div className="col-10">
                    <Swiper
    style={{
    '--swiper-navigation-color': '#000',
    '--swiper-pagination-color': '#000',
    }}
    loop={true}
    spaceBetween={0}
    navigation={true}
    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
    modules={[FreeMode, Navigation, Thumbs]}
    className="mySwiper2"
>
    
    <SwiperSlide>
        <div className='content'>
        <img 
            src={ProductImg} 
            alt="" 
            className='w-100' />
        </div>
    </SwiperSlide>    

     <SwiperSlide >
        <div className='content'>
        <img 
            src={ProductImg1} 
            alt="" 
            className='w-100' />
        </div>
    </SwiperSlide>        

     <SwiperSlide >
        <div className='content'>
        <img 
            src={ProductImg2} 
            alt="" 
            className='w-100' />
        </div>
    </SwiperSlide> 
</Swiper>
                </div>
            </div>
        </div>

        <div className="col-md-7">
            <h2>Product Name</h2>
                    <div className='d-flex align-items-center gap-1'>
                        <Rating
                        size={20}
                        readonly
                          initialValue={rating}
                            /* Available Props */
                        />
                        <span className='pt-1'>10 Reviews</span>
                        </div>

                        <div className="price h3 fw-bold">
                            $80 <span><s>$120</s></span>
                        </div>

                        <div>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. <br /> Quo, nemo.
                        </div>

                        <div className='pt-3'>
                            <h3>Select Sizes</h3>

                            <div className="pt-2 d-flex gap-2">
                            <button className="btn btn-size">S</button>
                            <button className="btn btn-size">M</button>
                            <button className="btn btn-size">L</button>
                            <button className="btn btn-size">XL</button>

                            </div>
                        </div>

                        <div className="addToCart my-2 py-3"><button className="btn btn-outline-primary text-uppercase">Add To Cart</button>
                        </div>

                        <hr />

                        <div>
                            <strong>SKU: </strong>
                            5V2E6D
                            </div>
        </div>
    </div>

    <div className="row pb-5">
        <div className="col-md-12">
             <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Description">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Tab>
      <Tab eventKey="profile" title="Reviews (10)">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut eos ullam quod non impedit.
      </Tab>
     
    </Tabs>
        </div>
    </div>
</div>
    </Layout>
  )
}

export default Product