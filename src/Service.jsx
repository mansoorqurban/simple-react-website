import React from 'react'
import Cards from './Cards'
import card_data from './card_data'

const service = () => {
    return (
        <div className='my-5'>
        <h1 className='text-center text-primary my-5'>Our Services</h1>

        <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-2">


          {card_data.map((item,ind)=>{
            return(
              <div className="col-lg-4 col-md-8 col-10 mx-auto">
              <Cards img={item.img} title={item.title} desc={item.desc} key={ind}/>
            </div>
            )



          })}
           
            


 </div>
 </div>
        </div>
       
      </div>
        </div>
    )
}

export default service
