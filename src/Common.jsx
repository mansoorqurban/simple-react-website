import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './image/img-home.jpg'

const Common = (props) => {
    return (

<section className='d-flex align-items-center'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.title} <strong className='text-primary'>{props.name}</strong></h1>
                    <h5 className='my-3'>{props.team}</h5>
                    <div className='mt-3'>
                        <NavLink to="/service" className='btn btn-outline-primary'>{props.btn}</NavLink>
                    </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={props.img} style={{height:'500px'}} className='img-fluid zoom-in-out-box' alt="" />
                    </div>

                    </div>
                     </div>
            </div>
        </div>

        </section>
    )
}

export default Common;
